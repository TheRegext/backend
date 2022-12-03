import yup from 'yup'


const userScheme = yup.object({
    name: yup.string().required("El nombre es requerido"),
    email: yup.string().email("El email no es valido").required("El email es requerido"),
    password: yup.string().min(6, "el password debe tener 6 caracteres como minimo").required("La contraseña es requerida")
}).noUnknown()


const user = {
    name: "Juan",
    email: "jdkslaj@kds0.com",
    password: "123dasdsa",
    age: 20
}


userScheme.validate(user, { abortEarly: false })
    .then((user) => {
        console.log("Usuario valido", user)
    })
    .catch((err) => {
        console.log("Usuario invalido", err.errors)
    })