import mongoose from "mongoose";

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI nao definida. Cria o ficheiro backend/.env a partir de .env.example.");
  }

  await mongoose.connect(uri);
  console.log(`MongoDB ligado: ${mongoose.connection.name}`);
}
