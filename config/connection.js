//setup the code to connect Node to MySQL
const mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database: 'burgers_db'
})

connection.connect((e) => {
    if(e) throw e
    
    console.log('Connected!')
});

module.exports = connection;

//Done