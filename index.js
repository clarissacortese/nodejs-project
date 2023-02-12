require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const cors = require("cors");
const bodyParser = require("body-parser");

//Routes

const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');
const usersRoute = require('./routes/users');

// Middlewares

app.use(bodyParser.json());
app.use(cors());
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);
app.use('/users', usersRoute);

// Connect

const main = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen("3000", () => {
      console.log("app listening on port 3000");
    });
  } catch (err) {
    console.log(err.message);
  }
};

main();

// 200 Page

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome!" });
});

// 404 Page

app.get("/*", (req, res) => {
  res.status(404).json({ message: "This page does not exist" });
});