const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/products";
const seed = require('./seed')
const Products = require('./models/ProductsModel')
const db = mongoose.connection;

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("the connection with mongo is established");
  }
);

db.on("error", (err) => console.log(err.message + " is Mongo not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGO_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});


// Products.insertMany(seed,(err, products) => {
//     if (err){ console.log(err)}
//       console.log("added provided products data", products)
//       mongoose.connection.close();
//     });