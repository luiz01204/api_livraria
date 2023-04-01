import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const livrosListados = await livros.find().populate("autor").exec();
      res.status(200).json(livrosListados);
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livro = await livros
        .findById(id)
        .populate("autor")
        .exec();

      if (!livro) {
        res.status(400).send({ message: "Id do livro não localizado." });
        return;
      }

      res.status(200).send(livro);
    } catch (err) {
      next(err);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const livro = new livros(req.body);
      await livro.save();
      res.status(201).send(livro.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static atualizaLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Livro atualizado com sucesso!" });
    } catch (err) {
      next(err);
    }
  };

  static excluiLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: "Livro removido com sucesso!" });
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;
      const livrosListados = await livros.find({ "editora": editora }).exec();
      res.status(200).send(livrosListados);
    } catch (err) {
      next(err);
    }
  };
}

export default LivroController;

// ex busca: http://localhost:3000/livros/busca?editora=Febracis