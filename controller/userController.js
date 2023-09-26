const res = require("express/lib/response")
const usuarios= require("../models/user");
const { model } = require("mongoose");


//create
exports.createUsuario= async (req,res)=>{
    try{

        const {username,email,password}= req.body;
        const usuario= {username,email,password}
        const usuarioSaveModel= new model.usuarios(usuario);
        const save= await usuarioSaveModel.save()
        if(save){
            res.status(201).json({
                usuario:save
            })
        }
    }catch(error){
        return res.status(500).json('error al crear el usuario')
    }
    
}

exports.getUsuarios= async(req,res)=>{
    const listaUsuarios= await usuarios.find({});

    res.status(200).json({
        usuarios
    })
}