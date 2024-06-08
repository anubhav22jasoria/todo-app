import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const [todoItems, updateTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    updateTodoItems((temp) => [...todoItems, { name: itemName, dueDate: itemDate }])

  }

  const handleDeleteButton = (deleteItemName) => {
    // console.log(`Item that has to be deleted is ${deleteItemName}`)
    const newTodoItems = todoItems.filter((name) => { name.name !== deleteItemName })
    updateTodoItems(newTodoItems)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcome />}
      <TodoItems todoItems={todoItems} handleDeleteButton={handleDeleteButton}></TodoItems>
    </center>
  );
}

export default App;
