import express from "express";

const app  = express(); 

app.use(express.json())

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobiit"}
  ]

app.get('/', (req, res) => {
     res.status(200).send("Curso de Node JS!")
});

app.get('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
})

app.get('/livros', (req, res)=>{
    res.status(200).send(livros)
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
  });

  app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
  })

  app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros.splice(index,1)
    res.json(`${index} livro removido com sucesso!`);
  })

  function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
  }

export default app;