import mongoose, { Schema } from "mongoose";

//esta si es info de typescript interface
export interface IUser {
    handle:string;
    name:string;
    email:string;
    password: string;
}
const userSchema = new Schema (
    //esta no es información de typescript, sino es info del schema o sea del modelo
    {
        handle: {
            type: String,
            required:true,
            trim: true, 
            lowercase:true,
            unique:true
        },
        name: {
            type: String,
            required:true,
            trim: true
        },
        email: {
            type: String,
            required:true,
            trim: true,
            unique: true,
            lowercase:true
        },
        password: {
            type: String,
            required:true,
            trim: true
        },
    }
)
const User = mongoose.model<IUser>('User', userSchema); //creamos el modelo de User con dos argumentos, el nombre y el schema
export default User; //ahora ya lo podemos importar en otros documentos.