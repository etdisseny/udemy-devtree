import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorsMessage } from "../components/errorsmessage";
import type { RegisterForm } from '../types/index';
import axios, {isAxiosError} from "axios";

export const RegisterView = () => {
  const initialValues : RegisterForm = {
    name: "",
    email: "",
    handle: "",
    password: "",
    password_confirmation: "",
  };
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const password = watch('password'); //nos mira que contiene password
  

  const handleRegister = async (formData : RegisterForm) => {
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData)
      console.log(data)
      reset() //resetea el formulario
    } catch (error) {
      if(isAxiosError(error)&& error.response){
        console.log(error.response.data.error)
      }
    }
  };

  return (
    <>
      <h1 className="text-white font-bold text-2xl">Crear cuenta</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-slate-500">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("name", {
              required: "El campo nombre es obligatorio",
            })}
          />
          {errors.name && <ErrorsMessage>{errors.name.message}</ErrorsMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El campo email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && (
            <ErrorsMessage>{errors.email.message}</ErrorsMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-2xl text-slate-500">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("handle", {
              required: "El campo handle es obligatorio",
            })}
          />
          {errors.handle && (
            <ErrorsMessage>{errors.handle.message}</ErrorsMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El campo password es obligatorio",
              minLength:{
                value:8,
                message:"El password tiene que tener mínimo 8 caractéres"
              }

            })}
          />
          {errors.password && (
            <ErrorsMessage>{errors.password.message}</ErrorsMessage>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password_confirmation"
            className="text-2xl text-slate-500"
          >
            Repetir Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repetir Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password_confirmation", {
              required: "El campo password es obligatorio",
              //le pasamos el value que es el valor de este campo y una arrow function
              //o los campos coinciden o sino lanza el mensaje
              validate: (value)=>value === password || "Los passwords deben coincidir" 
            })}
          />
          {errors.password_confirmation && (
            <ErrorsMessage>
              {errors.password_confirmation.message}
            </ErrorsMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
      </form>
      <nav className="my-10">
        <Link to="/auth/login" className="text-white text-lg text-center block">
          ¿No tienes cuenta? Registrarse aquí
        </Link>
      </nav>
    </>
  );
};
