'use strict'

var express = require('express');
var EjercicioController =require('../controllers/ejercicio');
//md_auth es para verificar que el usuario este logueado antes de usar la api
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');

var md_upload = multipart({uploadDir: './uploads/users'});

var api = express.Router();

api.get('/probando-ejercicios', EjercicioController.pruebas);

api.post('/register-exercise/:id', md_auth.ensureAuth ,EjercicioController.saveExercise);

api.put('/update-exercise/:id', md_auth.ensureAuth ,EjercicioController.updateExercise);

api.delete('/delete-exercise/:id', md_auth.ensureAuth ,EjercicioController.deleteExercise);

api.get('/get-exercise/:id', md_auth.ensureAuth ,EjercicioController.getExercise);

api.get('/get-exercises/:id', md_auth.ensureAuth ,EjercicioController.getExercises);




module.exports = api;