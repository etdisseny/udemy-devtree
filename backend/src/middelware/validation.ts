import type {NextFunction, Request, Response} from 'express';
import { validationResult } from 'express-validator';
//esta función la podremos reutilizar
export const handleInputErrors = (req:Request, res:Response, next:NextFunction)=>{
     let errors = validationResult(req); //validamos los datos que nos llegan por el body, query, params etc...
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); //si hay errores, devolvemos un status 400 y los errores
      }
      //para poder continuar si no hay errores y que pase a la siguiente función (ya que lo pusimos en el router)
      //pasamos otro parametro que es next, que tiene su tipado de expres NextFunction.
      next() 
}