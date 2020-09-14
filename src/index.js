const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const checkDataType = require("./checkDataType");

const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// here
app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});



app.post("/add", checkDataType, (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let result = num1 + num2;

  res.json({
    status: "success",
    message: "the sum of given two numbers",
    sum: result,
  });
  
})

app.post("/sub", checkDataType, (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  let result = num1 - num2;

  return res.json({
    status: "success",
    message: "the difference of given two numbers",
    sum: result,
  });
});

app.post("/multiply",checkDataType, (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  let result = num1 * num2;

  return res.json({
    status: "success",
    message: "The product of given numbers",
    sum: result,
  });
});

app.post("/division", checkDataType, (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  let result = num1 / num2;

  return res.json({
    status: "success",
    message: "The division of given numbers",
    sum: result,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;