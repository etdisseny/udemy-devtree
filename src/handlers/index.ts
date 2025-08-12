import User from "../models/Users"
import { Request, Response } from "express" //expres ya tiene algunos tipados que podemos utilizar
import { hashPassword } from '../utils/auth';
import slug from "slug";


export const createAuth = async (req : Request, res : Response)=>{ 
    //tambien se puede hacer de otra forma.
    //const user = new User(req.body); //creo una instancia de user
    //await user.save()

    /*COMPROVACION QUE NO HAYA EMAIL DUPLICADO */
    //lo comprovamos antes de que cree el registro
    const {email, password}= req.body
    //queremos que nos traiga la primera coincidencia y deje de hacer busqudas, asi nos aseguramos de que no 
    //duplicamos un email.
    //findOne, nos busca la primera coincidencia en la base de datos seria como un where en sql.
   const userExist = await User.findOne({email})
   if(userExist){
    const error = new Error ('El usuario ya está registrado')//creamos el error
    return res.status(409).json({error : error.message}) //hacemos un return con la respuesta poniendole un status que podemos buscar que numero seria el más adecuado
    // y devolvemos con json el error: error.message

   }
    //con una dependencia que hemos instalado 'slug' convertimos el handle para que no tenga espacios ni mayusculas, 
    //es decir que sea un código amigable para poner en la url.

    const handle = slug(req.body.handle)
  
    //primero validamos si existe el handle, ya que tieen que ser unico
   const handleExist = await User.findOne({handle})
   if(handleExist){
    const error =  new Error ('El nombre de usuario ya existe')
    return res.status(409).json({error:error.message})
   }
    /*CREAMOS EL REGISTRO*/ //siempre que el email no exista
    const user = new User(req.body)
     //pasamos el pasword hasheado
    user.password = await hashPassword(password)
    //pasamos en handle
    user.handle = handle

   

    await user.save();
    //tambien podriamos utilizar este otro codibo
    //await User.create(req.body) //este es un metodo de moongose que crea la conexion e inserta el contenido
    //para poder finalizar la ejecucion del código, podemos recibir la respuesta, con res.
    //'req' es lo que envias, 'res' es la respuesta
  

    res.status(201).send('Registro creado correctamente') //añadimos el status 201 que significa que se a creado
}

//para hashear los password, podemos utilizar una dependecia, en este caso usaremos bcrypt. npm i bcrypt