const {Router} = require('express');
const validarToken = require('../utils/token');
const router = Router();

router.get("/login", validarToken, (req, res) => {
  if(res.locals.usuario.nombre !== ''){
    console.log("Usuario ya autenticado, redirecciona a inicio");
    res.redirect('/inicio');
  }else{
    res.render('login',{mensaje:"Iniciar sesión"});
  }
});

router.post("/login", validarToken, async (req, res) => {
  const { id, password } = req.body;
  try {
      const response = await fetch('http://localhost:3000/api/auth', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, password })
      });
      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error de autenticación');
      }
      const data = await response.json();
      const token = data.token;
      res.cookie('token', token, { httpOnly: true, secure: false});
      res.redirect('/inicio');

  } catch (err) {
      console.error('Error al iniciar sesión:', err);
      res.render('login', { mensaje: "Error de servidor" });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

  module.exports = router;