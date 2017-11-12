'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var EjericioSchema = schema({
    name: String,
    description: String,
    date: Number,
    rm: String,
    medida: String,
    user: {type: schema.ObjectId, ref:'User'}

});

module.exports = mongoose.model('Ejercicio',EjericioSchema);  