const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

// .then(() => console.log("CONNECTED TO DB"))
// .catch((err) => console.log(err));
