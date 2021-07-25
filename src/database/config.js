const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/u4activity';
const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
};

const dbConnection = () => {
  mongoose.connect(uri, options)
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
	  .then(() => console.log('Connected database'))
	  .catch(e => console.log('DB Error:', e))
}

module.exports = dbConnection;