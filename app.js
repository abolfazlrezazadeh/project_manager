const Aplication = require("./app/server");
const DB_URL = "mongodb://127.0.0.1:27017/projectManager";
new Aplication(3000 , DB_URL);