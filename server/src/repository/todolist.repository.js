const db = require("../config/database");

async function getToDoList() {
  console.log("repository");
  const [toDoList] = await db.execute("SELECT * FROM todolist");
  return toDoList;
}
async function addToDoList(item) {
  console.log(item);
  const [result] = await db.execute("insert into todolist (title) values (?)", [
    item.title,
  ]);
  return result;
}
async function deleteTodo(id) {
  const [result] = await db.execute("delete from todolist where id = ?", [id]);
  return result;
}
async function editTodo(id, item) {
  const [result] = await db.execute(
    "update todolist set title = ? where id = ?",
    [item.title, id]
  );
  return result;
}
module.exports = { getToDoList, addToDoList, deleteTodo, editTodo };
