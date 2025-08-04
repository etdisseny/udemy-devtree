import mongoose from  'mongoose'

export const connectDB = async ()=>{
    try{
        const url = "mongodb+srv://root:Nxoje4zY1FsHZ9FD@pruevas.yrc28j2.mongodb.net/linktree_node_typescript"
        const {connection} = await mongoose.connect(url)
        const url2 = `${connection.host}:${connection.port}`
        console.log(`MongoDB conectado en ${url2}`)
    }catch(error){
        console.log(error)
    }
}