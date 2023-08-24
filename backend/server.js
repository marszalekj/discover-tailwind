const http = require("http");

// import de l'application
const app = require("./app");

// port a utiliser par le serveur
app.set("port", process.env.PORT);
const server = http.createServer(app);

server.listen(process.env.PORT || 4000);
