const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbConnection = require('./database/config');

dbConnection();

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('port', process.env.PORT || 3000);

app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/tasks'));
app.use('/api', require('./routes/auth'));

app.listen(app.get('port'), function () {
    console.log(`App running at port: http://localhost:${app.get('port')}`);
});