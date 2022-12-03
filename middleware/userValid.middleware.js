import { loginScheme } from "../schemes/users.schemes.js"


function isLoginValid(req, res, next) {
    loginScheme.validate(req.body, { abortEarly: false })
        .then((loginData) => {
            req.body = loginData
            next()
        })
        .catch(err => {
            res.status(400).json({ errors: err.errors })
        })
}

export {
    isLoginValid
}