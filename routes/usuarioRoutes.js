import {Router} from 'express';
import UsuarioService from '../services/usuarioService.js';

const  usuariosRouter=Router();
const UService=new UsuarioService();

usuariosRouter.get('/', async(req,res)=> {
    const usuarios=await UService.getAll();
    
    return res.status(200).json(usuarios);
});

usuariosRouter.get('/:id', async (req,res)=> {
   const id=req.params.id;
    const usuarios = await UService.getById(id);
    return res.status(200).json(usuarios);
});

usuariosRouter.post('/',async(req,res) => {
  
    console.log(req.body);
    //const {nombre, apellido, usuario, contrasenia, fechaNacimiento, mail, diabetesActual, fkContactoEmergencia,fkTipoDiabetes,fkRol,fkTipoSangre,fkObraSocial,fkMedico,peso,sangre} = req.body
    const {nombre, apellido} = req.body
    
    const usuarios = await UService.insert(nombre, apellido);
    //const usuarios = await UService.insert(nombre, apellido, usuario, contrasenia, fechaNacimiento, mail, diabetesActual, fkContactoEmergencia,fkTipoDiabetes,fkRol,fkTipoSangre,fkObraSocial,fkMedico,peso,sangre);
    return res.status(200).json(usuarios);

    
   

});

usuariosRouter.put('/:id',async(req,res) => {
    console.log("hola")
    const id =req.params.id;
    const body=req.body;
    const usuarios= await UService.update(body);
    return res.status(200).json(usuarios);
});

usuariosRouter.delete("/:id",async (req,res)=>{
    const id=req.params.id;
    const usuarios=await UService.deleteById(id)
    return res.status(200).json(usuarios);

});

export default usuariosRouter;