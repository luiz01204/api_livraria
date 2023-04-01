import mongoose from "mongoose";

const livroSchena = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "Titulo é obrigatório."]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, ref: "autores",
      required: [true, "Autor é obrigatório."]
    },
    editora: {
      type: String, 
      required: [true, "Editora é obrigatória."]
    },
    numeroPaginas: {
      type: Number,
      min: [10, "Editora é obrigatória."],
      max: [5000, "Editora é obrigatória."]
    }
  },
  {
    versionKey: false
  }
);

const livros = mongoose.model("Livros", livroSchena);

export default livros;

/* Modelo JSON livros:
{
	"titulo": "Criação de Riqueza",
	"autor": "641103a2d8e0b0a75ca99d94",
	"editora": "Febracis",
	"numeroPaginas": 350
}
*/