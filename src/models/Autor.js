import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;

/* Modelo JSON autores: 
{
	"nome": "Robert Kiyosaki",
	"nacionalidade": "Hawaii, Estados Unidos"
}
*/