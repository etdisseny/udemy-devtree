import { Outlet } from "react-router-dom";
import {Toaster} from "sonner"; //lo instalamos en el layout 

export const AuthLayout = () => {
  return (
    <>
    <section className=" bg-slate-800 min-h-screen">
      <div className="max-w-lg mx-auto pt-10 px-5">
        <img src="/logo.svg" alt="Logotipo" />
        <div className="py-10">
          <Outlet />
        </div>
      </div>
    </section>
    <Toaster position="top-right"/>
    </>
  );
};
