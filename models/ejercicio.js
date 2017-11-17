'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var EjercicioSchema = schema({
    name: String,
    description: String,
    date: Date,
    rm: Number,
    medida: String,
    user: {type: schema.ObjectId, ref:'User'}

});

module.exports = mongoose.model('Ejercicio',EjercicioSchema);  