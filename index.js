'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')






// app.get('/hola/:name', (req,res) => { req = la peticion, res la respuesta
//     res.send({message: `Hola ${req.params.name}`})
// })


//el puerto por defecto es 27017
mongoose.connect(config.db, (err, res)=>{
    if(err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('conexion a la base de datos establecida')
    app.listen(config.port, () =>{
        console.log(`API REST  corriendo en http://localhost:${config.port}`)
    })
})

