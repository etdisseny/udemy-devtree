// const express = require('express') //forma antigua con COMON JS y no acepta typescript
//Utilizaremos la forma de ecmascript que es por módulos
//para ello en package.json añadimos "type":"module", y ahora podemos itilizar imports
import express from "express"

const app = express()

//routing
//request envia datos y response es la respuesta que recibes
app.get('/', (req, res)=>{
    res.send('Hola mundo en express')
})
app.get('/ecomerce', (req, res)=>{
    res.send('Esta es una pagina de ecomerce')
})
//cada vez que creamos una nueva ruta, tendriamos que apagar el servidor y volver a lanzarlo para actualizarlo.
//esto no es muy eficiente, para eso utilizamos tenemos 2 opciones, de forma nativa utilizando el watch: node --watch index.js
//para esta opción del watch, podemos crear un script en el packaje.json  y lo ejecutamos con npm run dev
//o con una dependencia de desarrollo que se llama nodemon (libreria de desarrollo solo se instalan cuando estas desarrolando el proyecto)
//Para instalar la dependencia podemos usar npm i -D nodemon (la -D nos marca qeu es un dependencia de desarrollo)
 /*"scripts": {
    "dev": "node --watch index.js" (si usamos watch)
    "dev": "nodemon index.js" (si usamos nodemon)
  },*/

  const port = process.env.PORT || 4000 //Cuando hagamos el deployment, el servidor nos dira el puerto, sino utilizamod el que nosotros ponemos por defecto
app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto:', port)
})

//INSTALAMOS TYPESCRIPT
// npm i -D typescript ts-node (lo instalamos como dependencia de desarrollo, en producción ya se compila a javascript ya que 
//el servidor solo admite javascript)
//como express no soporta typescript, tenemos que configurar mediante un archivo tsconfig.json

// para las bases de datos, vamos a untilizar mongoose y nos habremos creado una bd en Mongo Atlas.
//de aqui es de donde cogemos los datos que pondremos en nuestra configuracion de la base de datos. config/db.ts
// para crear nuestras variables de entorno, como nodemon no admite variables de entorno, tendremos que instalar
// npm i dotenv - cargamos esta dependencia en el archivo server.ts import 'dotenv/config'
// npm i colors - esta dependecia es para darle color en la terminal a lo que queramos para marcar errores, etc..

//tendremos que crear una carpeta models y dentro  un schema de los datos que vamos a recoger, los atrivutos que tendran
//Es decir con el schema, marcamos las reglas que van a tener los datos que recogemos.