export type User = {
    name: string,
    email:string,
    handle: string,

}
//Pick te permite seleccionar atributos de otro type.
export type RegisterForm = Pick<User, 'name'| 'email'| 'handle'> & {
        password:string,
        password_confirmation: string
}