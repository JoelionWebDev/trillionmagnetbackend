const express = require("express");
const router = require("./server/router/routes");
const bodyParser = require("body-parser");
const connectDB = require("./server/database/connections");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const notFound = require("./middleware/not-found");
const errHandler = require("./middleware/error-handler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//init view engine
//app.set("view engine", "ejs");

//CREATING A FILE TO STORE ALL THE TOKENS
const userTokenStore = fs.createWriteStream(
  path.join(__dirname, "userTokens.log"),
  { flags: "a" }
);
//init morgan
app.use(morgan("tiny", { stream: userTokenStore }));

// // bringing in my static files
// app.use("/css", express.static(path.join(__dirname, "assets/css")));
// app.use("/img", express.static(path.join(__dirname, "assets/img")));
// app.use("/js", express.static(path.join(__dirname, "assets/js")));

//initialize router
app.use("/", router);

app.use(notFound);
app.use(errHandler);

const port = process.env.Port;

//init connections as async function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`server started in port = http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
};
start();
