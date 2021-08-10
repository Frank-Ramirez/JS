const mysql = require('mysql');
const DATABASE = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ticket'
});
module.exports = DATABASE//exportamos el modulo para sea utilizado cuando se llame a la conexion