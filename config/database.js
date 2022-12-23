const dotenv = require('dotenv');
const mongoose = require("mongoose");



const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://omasa:omasa1652@grocery.gakjw9r.mongodb.net/amuaFintech?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB; 
