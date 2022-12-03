import yup from 'yup'

const loginScheme = yup.object({
    email: yup.string().email("El email no es valido").required("El email es requerido"),
    password: yup.string().min(6, "el password debe tener 6 caracteres como minimo").required("La contraseña es requerida")
}).noUnknown()

const userScheme = yup.object({
    name: yup.string().required("El nombre es requerido"),
    email: yup.string().email("El email no es valido").required("El email es requerido"),
    password: yup.string().min(6, "el password debe tener 6 caracteres como minimo").required("La contraseña es requerida")
}).noUnknown()

export {
    loginScheme,
    userScheme

}