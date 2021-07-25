const checkIfLogedIn = (req, res, next) => {
	const { requester } = req.body
	if (!requester.isLogedIn){
		res.status(400).json({ error: 'Ingrese a la plataforma primero'})
	}
	
	next();
}
module.exports = checkIfLogedIn;