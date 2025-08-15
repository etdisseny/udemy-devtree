import bcrypt from "bcrypt";

//crearemos las funciones para hashear
//creamos un salt. Un salt es una cadena de caracteres aleatoria
//esto lo que va a generar es que si dos personas diferentes tienen un pasword igual,
// el va a hashar 2 paswords diferentes en la base de datos.
//al final el objetivo es aumentar la seguridad, haciendo que los hashes sean diferenters aunque las contraseñas sean iguales
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10); //rondas o numero de veces que se va a aplicar esta función de hash
  //creamos el hash, pasando el password y el salt
  return await bcrypt.hash(password, salt);
};

//con esta funcione chequeamos el password
//le pasamos 2 paramentros el password que queremos comprovar y el hasheado de la base de datos
export const checkPassword = async (enterPassword: string, hash: string) => {
  //utilizamos una función de bcript, para comparar los dos passwords
  return await bcrypt.compare(enterPassword, hash);
};
