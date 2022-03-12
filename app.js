const express = require("express");
const app = express();

const { db } = require("./app/routes/db");
const routes = require("./app/routes/routes");
const port= process.env.port || 3000;
db.connect((err) => {
    if (err) return console.log(err);
    app.listen(port, function () {
      console.log(`listening on port ${port}!`);
    });
  });
  