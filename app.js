// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); // Importa la conexión a la base de datos

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/guardar', (req, res) => {
  const { nombres, apellidos, cedula, celular, correo } = req.body;

  // Validaciones adicionales aquí
  // ...

  // Inserta los datos en la base de datos
  const sql = `INSERT INTO reservas (nombres, apellidos, cedula, celular, correo) VALUES (?, ?, ?, ?, ?)`;
  connection.query(sql, [nombres, apellidos, cedula, celular, correo], (err, result) => {
    if (err) {
      console.error('Error al insertar los datos:', err);
      res.status(500).send('Error al guardar los datos');
    } else {
      console.log('Datos almacenados correctamente');
      res.send('Datos almacenados correctamente');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
