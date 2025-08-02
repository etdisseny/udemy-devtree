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