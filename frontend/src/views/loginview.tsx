import { Link } from "react-router-dom";

export const LoginView = () => {
  
  return (
    <>
      <h1 className="text-white font-bold text-2xl">Iniciar sesión</h1>
      <nav className="my-10">
        <Link
          to="/auth/register"
          className="text-white text-lg text-center block"
        >
          ¿No tienes cuenta? Registrarse aquí
        </Link>
      </nav>
    </>
  );
};
