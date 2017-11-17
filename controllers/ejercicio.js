'use strict'
var Ejercicio = require("../models/ejercicio");
var User = require('../models/user');
var moment = require('moment');

function pruebas(req, res){
    res.status(200).send({
        message:'Probando contoller EJERCICIOSSSSSS'
    });

}

function saveExercise(req, res){
    var exercise = new Ejercicio();
    var params = req.body;
    var userId = req.params.id;
    
    //console.log(params);
    exercise.name = params.name;
    exercise.description = params.description;
    exercise.rm = params.rm;
    exercise.date = new Date();
    exercise.medida = params.medida;
    exercise.user = userId;

    exercise.save( (err,exerciseStored)=>{
        if(err){
            res.status(500).send({message: 'error al guardar el ejercicio'});
        }
        else{
            if(!exerciseStored){
                res.status(404).send({message: 'No se ha registrado el ejercicio'});
            }else{
                res.status(200).send({exercise: exerciseStored});
            }
        }
    } );
}

function updateExercise(req,res){
 var exerciseId = req.params.id;
 var update = req.body;
 Ejercicio.findByIdAndUpdate(exerciseId, update, (err, exerciseUpdated)=>{
        if(err){
            res.status(500).send({message: 'Error al Actualizar Ejercicio'});
            
        }else{
            if(!exerciseUpdated){
                res.status(404).send({message: 'No se ha podido actualizar Ejercicio'});
                
            }else{
                res.status(200).send({exercise: exerciseUpdated});
                
            }
        }
 });
}

function deleteExercise (req,res){
    var exerciseId = req.params.id;
    Ejercicio.findByIdAndRemove(exerciseId,(err, exerciceRemoved)=>{
        if(err){
            res.status(500).send({message: 'Error al Eliminar Ejercicio'});
            
        }else{
            if(!exerciceRemoved){
                res.status(404).send({message: 'No se ha podido eliminar Ejercicio'});
                
            }else{
                res.status(200).send({exercise: exerciceRemoved});
                
            }
        }
    });
}

function getExercise(req,res){
    var exerciseId = req.params.id;
    Ejercicio.findById(exerciseId, (err, exercise)=>{
        if(err){
            res.status(500).send({message: 'Error al obtener Ejercicio'});
            
        }else{
            if(!exercise){
                res.status(404).send({message: 'No existe ese Ejercicio'});
                
            }else{
                res.status(200).send({exercise});
                
            }
        }
    });

}

function getExercises(req,res){
    var userId = req.params.id;
    var find = Ejercicio.find({user:userId}).sort('name');
    
    find.populate({
        path:'user'
    }).exec((err,exercises)=>{
        if(err){
            res.status(500).send({message: 'Error en la peticion'});
        }else{
            if(!exercises){
            res.status(404).send({message: 'No hay ejercicios cargados para ese user'});
            }else{
                res.status(200).send({exercises});
            }
        
    }
    });
}

module.exports = {
    pruebas,
    saveExercise,
    updateExercise,
    deleteExercise,
    getExercise,
    getExercises
}