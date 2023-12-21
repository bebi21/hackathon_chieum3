import "./App.css";
import Login from "./components/Login/Login";
import ToDoList from "./components/Todolist/ToDoList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default App;
