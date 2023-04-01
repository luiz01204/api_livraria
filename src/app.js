import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/indexRoutes.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";

db.on("error", console.log.bind(console, "Erro de conexão com banco!"));
db.once("open", () =>{
  console.log("Conexão como banco feita com sucesso!");
});

const app  = express();   
routes(app); 
app.use(manipuladorErros);

export default app;