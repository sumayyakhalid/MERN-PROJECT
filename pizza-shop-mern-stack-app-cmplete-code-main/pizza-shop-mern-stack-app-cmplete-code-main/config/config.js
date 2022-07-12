const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = "mongodb+srv://sumayya:12345@pakistan.wwbbgk8.mongodb.net/?retryWrites=true&w=majority";
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
