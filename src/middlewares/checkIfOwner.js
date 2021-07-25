const checkIfOwner = (req, res, next) => {
	const { requester, owner } = req.body
	if (requester.id !== owner.id){
		res.status(400).json({ error: 'El usuario no es el dueño de la tarea'})
	}
	
	next();
}
module.exports = checkIfOwner;