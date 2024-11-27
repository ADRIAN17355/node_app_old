const app = require("./app");

//Ejecutar la app configurada
async function main() {
    const port = 8080;
    await app.listen(port);
    console.log("Servidor funcionando en el puerto "+port);
}

main();