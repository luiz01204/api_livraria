import express from "express";
import livrosRoutes from "./livroRoutes.js"
import autores from "./autoresRoutes.js"

const routes = (app) => {

  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "API livraria!"})
  })

  app.use(
    express.json(),
    livrosRoutes,
    autores
  )
}

export default routes