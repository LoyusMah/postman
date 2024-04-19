import mongoose from "mongoose";

export const connectMongo = () => {
  const uri = "mongodb://localhost:27017/dentedcodeDb";
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((erro) => console.log(erro));
};
