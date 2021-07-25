const User = require('../models/User');
const Role = require('../helpers/role');

async function register(req, res){

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({ error: 'Email ya registrado' })
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: password,
        tasks: req.body.tasks,
    });

    const isFirstuser = (await User.countDocuments({})) === 0;
    newUser.role = isFirstuser ? Role.Admin : Role.User;

    User.create(newUser).then(() => {
        res.status(201).send('Registro exitoso');
    }).catch(error => {
        res.status(400).send({ error });
    })
}

async function login(req, res){
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        tasks: user.tasks,
    },
		process.env.TOKEN_SECRET,
		{ expiresIn: 60 * 60 * 24 * 30}
		); // Expira en 30 días
    user.isLoggedIn = true;
    res.json({ user: user, token })
}

async function logout(req, res){
    const user = await User.findOne({ email: req.body.email });
    user.isLoggedIn = false;
    res.json({user: user});
}

module.exports = {
    register,
    login,
    logout
}