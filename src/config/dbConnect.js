import mongoose from "mongoose";

mongoose.connect("mongodb+srv://api-root:029599012@api-livros.j4e1xgk.mongodb.net/api-livros");

let db = mongoose.connection;

export default db;