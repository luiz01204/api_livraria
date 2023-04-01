import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresLista = await autores.find();
      res.status(200).json(autoresLista);
    } catch (err) {
      next(err);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const autor = await autores.findById(id);
      if (!autor) {
        return res.status(400).send({ message: "Id do Autor não localizado." });
      }
      res.status(200).send(autor);
    } catch (err) {
      next(err);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      const autor = new autores(req.body);
      await autor.save();
      res.status(201).send(autor.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    const id = req.params.id;
    try {
      const autor = await autores.findByIdAndUpdate(id, { $set: req.body });
      if (!autor) {
        return res.status(400).send({ message: "Id do Autor não localizado." });
      }
      res.status(200).send({ message: "Autor atualizado com sucesso" });
    } catch (err) {
      next(err);
    }
  };

  static excluirAutor = async (req, res, next) => {
    const id = req.params.id;
    try {
      const autor = await autores.findByIdAndDelete(id);
      if (!autor) {
        return res.status(400).send({ message: "Id do Autor não localizado." });
      }
      res.status(200).send({ message: "Autor removido com sucesso" });
    } catch (err) {
      next(err);
    }
  };

}

export default AutorController;