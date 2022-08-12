import {Router} from 'express';
import ComidaService from '../services/comidaService.js';

const comidasRouter=Router();
const CService=new ComidaService();

comidasRouter.get('/', async(req,res)=> {
    const comidas=await CService.getAll();
    
    return res.status(200).json(comidas);
});

comidasRouter.get('/:id', async (req,res)=> {
   const id=req.params.id;
    const usuarios = await CService.getById(id);
    return res.status(200).json(usuarios);
});



export default comidasRouter;