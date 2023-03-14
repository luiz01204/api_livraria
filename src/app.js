import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/indexRoutes.js";

db.on("error", console.log.bind(console, "Erro de conexão com banco!"))
db.once("open", () =>{
  console.log("Conexão como banco feita com sucesso!")
})

const app  = express();   
routes(app) 

export default app;