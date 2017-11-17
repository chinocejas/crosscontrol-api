'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargarRutas
var user_routes=require('./routes/user');
var artist_routes=require('./routes/artist');
var ejercicio_routes=require('./routes/ejercicio');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configure HTTP heads
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Acces-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT ,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT ,DELETE' );

    next();
});

//rutas base
app.use('/api', user_routes);
app.use('/api', artist_routes);
app.use('/api', ejercicio_routes);



module.exports= app;