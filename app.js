console.log("Web server is Started");
const express = require("express");
const app = express();
const router = require("./router")

// Mongo db ga kirish
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 kirish codelar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Sesseion code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.use("/",router)
// Post malumotni ozi bilan birga olip keladi va Date base ga yozadi


module.exports = app;