const handlebars = require('handlebars');

handlebars.registerHelper('estaAutenticado', function(options) {
    const usuario = options.data.root.usuario;

    if (usuario && usuario.nombre) {
        return typeof options.fn === 'function' ? options.fn(this) : '';
    }

    return typeof options.inverse === 'function' ? options.inverse(this) : '';
});

handlebars.registerHelper('esAdmin', function(rol, options) {
    return rol === 1 ? options.fn(this) : options.inverse(this);
});