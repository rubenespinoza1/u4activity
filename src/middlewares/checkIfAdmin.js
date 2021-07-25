const checkIfAdmin = (req, res, next) => {
	const { requester } = req.body
	if (requester.role !== 'Admin'){
        res.status(400).json({ error: 'El usuario no es admin'})
    }
	next();
}
module.exports = checkIfAdmin;