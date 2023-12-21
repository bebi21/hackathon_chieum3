const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { usersRouter } = require("./src/router/user.routes");
const { toDoList } = require("./src/router/todolist.router");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();

//worksRouter(app);
usersRouter(app);
toDoList(app);

app.listen(process.env.HOST, () => {
  console.log(`Server is running on port ${process.env.HOST}`);
});
