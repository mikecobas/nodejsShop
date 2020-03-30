
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const productCtrl = require('./controllers/product')

const app = express()

const api = require('./routes')


app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json()) //para recibir peticiones en JSON
app.use('/api', api)
module.exports = app