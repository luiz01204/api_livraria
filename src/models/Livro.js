import mongoose from "mongoose";

const livroSchena = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

const livros = mongoose.model("Livros", livroSchena);

export default livros

/* 
{
	"titulo": "O poder da ação",
	"autor": "Paulo vieira",
	"editora": "Febracis",
	"numeroPaginas": 200
}
*/