//instalamos npm i cors en producción y para los tipados nim i -D @types/cors en desarrollo
import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};
