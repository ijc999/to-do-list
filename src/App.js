import { useState } from "react";
import logo from "./to-do.png";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  // Add item function
  function addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      setList([...list, newItem]);
      setNewItem("");
    }
  }

  // Delete item function
  function deleteItem(id) {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  }

  // Update input function
  function updateInput(input) {
    setNewItem(input);
  }

  return (
    <div>
      <img src={logo} width="250" height="250" alt="logo" className="logo" />
      <h1 className="app-title">Chris's To-Do-App</h1>
      <div className="container">
        Add an Item...
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Write a to-do"
          value={newItem}
          onChange={(e) => updateInput(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => addItem(newItem)}
          disabled={!newItem.length}
        >
          Add a To-do
        </button>
        <div className="list">
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => {
                      const updatedList = list.map((listItem) => {
                        if (listItem.id === item.id) {
                          return { ...listItem, isDone: !listItem.isDone };
                        }
                        return listItem;
                      });
                      setList(updatedList);
                    }}
                  />
                  <span>{item.value}</span>
                </label>
                <button className="btn" onClick={() => deleteItem(item.id)}>
                  Delete a To Do
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
