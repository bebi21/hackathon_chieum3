const {
  render,
  add,
  remove,
  edit,
} = require("../controller/todolist.controller");
const { verifyToken } = require("../middlewares/Token");

const toDoList = (app) => {
  console.log("router");

  app.get("/render", render);
  app.post("/render", verifyToken, add);
  app.delete("/render/:id", verifyToken, remove);
  app.put("/render/:id", verifyToken, edit);
};
module.exports = { toDoList };
