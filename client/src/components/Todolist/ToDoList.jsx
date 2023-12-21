import React, { useEffect, useState } from "react";
import publicAxios from "../config/publicAxios";
import privateAxios from "../config/priveAxios";
export default function ToDoList() {
  const [toDoList, setTodDoList] = useState([]);
  const [newToDo, setNewToDo] = useState({
    title: "",
  });
  const [check, setCheck] = useState(true);
  const takeTodolist = async () => {
    try {
      const response = await publicAxios.get("/render");
      setTodDoList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    takeTodolist();
  }, []);
  const handleTakeValue = async (e) => {
    setNewToDo({
      ...newToDo,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdd = async () => {
    try {
      await privateAxios.post("/render", newToDo);
      takeTodolist();
      setNewToDo({
        title: "",
      });
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await privateAxios.delete(`/render/${id}`);
      takeTodolist();
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
  const handleSave = async () => {
    try {
      await privateAxios.put(`/render/${newToDo.id}`, newToDo);
      takeTodolist();
      setCheck(!check);
      setNewToDo({
        title: "",
      });
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  const handleEdit = async (item) => {
    setNewToDo(item);
    setCheck(!check);
  };
  return (
    <>
      <div className="wrapper">
        <div className="task-input">
          <ion-icon name="create-outline" />
          <input
            type="text"
            placeholder="Add a Name"
            onChange={handleTakeValue}
            name="title"
            value={newToDo.title}
          />
        </div>

        <div v className="task-input" style={{ marginTop: "10px" }}>
          {check ? (
            <button className="clear-btn active" onClick={handleAdd}>
              Add
            </button>
          ) : (
            <button className="clear-btn active" onClick={handleSave}>
              Save
            </button>
          )}
        </div>
        <div className="controls" style={{ marginTop: "-30px" }}>
          <div className="filters">
            <span className="active" id="all">
              All
            </span>
          </div>
        </div>
        <ul className="task-box">
          {toDoList.map((item, index) => (
            <li className="task" key={index}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  justifyContent: "left",
                }}
              >
                <p>{item.title}</p>
              </label>
              <div>
                <button
                  className="clear-btn active"
                  style={{ marginRight: "20px" }}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="clear-btn active"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
