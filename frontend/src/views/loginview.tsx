import { Link } from "react-router-dom";

export const LoginView = () => {
  return (
    <>
      <h1 className="text-white font-bold">Crear cuenta</h1>
      <nav>
        <Link to="/auth/register">¿No tienes cuenta? Registrarse aquí</Link>
      </nav>
    </>
  );
};
