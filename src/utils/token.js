const jwt = require('jsonwebtoken');
const secretKey = '123tamarindo'; 

const validarToken = (req, res, next) => {
    const token = req.cookies.token; 

    if (!token) {
        res.locals.usuario = { rol: null, nombre: '' };
        return next();
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            res.locals.usuario = { rol: null, nombre: '' };
            console.log("token inactivo");
            return next();
        }

        res.locals.usuario = decoded;
        console.log("token activo");
        next();
    });
};

module.exports = validarToken;