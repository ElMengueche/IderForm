// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contrasena',
  database: 'reservas_deportivas'
});

module.exports = connection;
