const express = require("express");
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");
const app = express();
const port = process.env.PORT ||3000;
const staicPath = path.join(__dirname, "../public");
const partials = path.join(__dirname, "../views/partials");
const views = path.join(__dirname, "../views");
console.log(partials);
app.set("view engine", "hbs");

app.use(express.static(staicPath));

hbs.registerPartials(partials);
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/weather", (req, res) => {
  res.render("weather");
  
  
});
app.get("*", (req, res) => {
  res.render("404error",{
    errMessage:"OOPS! PAGE NOT FOUND"
  });
});

app.listen(port, () => {
  console.log(`listind ont the port ${port}`);
});
