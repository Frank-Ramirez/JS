//npm init --yes //para crear el package.json
//npm i mysql // instalr mysql y express para la conexion a la BD
const express = require('express');
const app = express();//creamos el objeto app para poder utilzar express
const cors = require('cors');
const db = require('./conexion');// exportamos la conexion

app.set('port', process.env.PORT || 3000);//las solicitudes http se procesan por el puerto que otorgue la maquina, sino lo hace, tomamos por defecto el 3000
app.use(cors());
app.use(express.json());
//insertar datos en la bd 
app.post('/', (req, res) => {
const obj = req.body;
    const query = "INSERT INTO reporte (empleado, area, servicio, fechEmp) VALUES (?, ?, ?, ?)";
    db.query(query,obj, function(error, results, fields){
       res.json("datos insertados")
    });
});
/**obtener datos de la bd */
app.get('/get-dat/:empleado', (req, res) => {
    db.query("SELECT * FROM empleado WHERE empleado = ?",[req.params.empleado], function(error, results, fields){
        res.json(results[0])
        console.log.apply(res)
    });
});

app.get('/get-date', (req, res) => {
    const query = "SELECT * FROM reporte";
    db.query(query, function(error, results, fields){
        res.json(results)
        console.log.apply(res)
    });
});

app.get('/:fecha', (req, res) => {
    db.query("SELECT * FROM reporte WHERE fechEmp = ?",[req.params.fecha], function(err, rows, fields) {
        res.json(rows);
        console.log(res);
    });
});

app.listen(app.get('port'), () => {
    console.log("servidor corriendo");
});