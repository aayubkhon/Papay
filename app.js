console.log("Web server is Started");
const express = require("express");
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr");

// 1 kirish codelar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Sesseion code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing coded
app.use("/resto", router_bssr); // ananaviy yol admin bilan ishlaydi 
app.use("/", router);  /// rest ap i React frontend bilan ishlaydi
// Post malumotni ozi bilan birga olip keladi va Date base ga yozadi

module.exports = app;
