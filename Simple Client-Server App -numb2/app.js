const express = require("express");
const app = express();
const { logger } = require("./logger");
var randomstring = require("randomstring");

//import middleware
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

//Server port
app.listen(5050, () => {
  //   logger.info("Express server is running on localhost:5050");
  console.log("Express server is running on localhost:5050");
});

//POST
var count = 0;
app.post("/test", (req, res) => {
  const random = randomstring.generate(7);
  const header = { "X-RANDOM": random };
  let cp = count++;
  //   req.header = header;
  req.body = { counter: cp };
  data = { counter: cp, header };
  res.status(201).send(req.body);
  logger.info(["Success: POST http://0.0.0.0:5050/test", data]);
});
