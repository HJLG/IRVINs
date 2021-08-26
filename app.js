const express = require("express");
const cors = require("cors");
const app = express();
const productsRouter = require("./routes/productsRouter");
const path = require('path')
//MIDDLEWARE
app.use(express.json());
const corsOptions = {
    origin : [
        "http://localhost:3000"
    ]
}
app.use(cors(corsOptions));

app.use("/api/products", productsRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on this server`);

  next(new BaseError(error.name, httpStatusCodes.NOT_FOUND, error.message));
});
module.exports = app;
