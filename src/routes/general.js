const {Router} = require('express');
const validarToken = require('../utils/token');
const router = Router();

router.get("/", (req, res) => {
    res.redirect("/registrar");
});

router.get("/inicio", validarToken, (req, res) => {
    res.render('inicio',{mensaje:"Inicio"});
});

router.get("/caracteristicas", (req, res) => res.render('inicio',{mensaje:"Características"}));

router.get("/precios", (req, res) => res.render('inicio',{mensaje:"Precios"}));

router.get("/contacto", (req, res) => res.render('inicio',{mensaje:"Contacto"}));

module.exports = router;