const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://anaswar:mandan@cluster0.vowrs6n.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

module.exports = mongoose.connection; // Export the connection object
