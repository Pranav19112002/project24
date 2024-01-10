const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://gauthamsajus686:2003@cluster0.btg6bil.mongodb.net/doctor";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

module.exports = mongoose.connection; // Export the connection object
