import { useEffect, useState, useContext } from "react";
import Todolist from "../components/Todolist";
import { IconMoon, IconSunHigh } from "@tabler/icons";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [isFirstRendered, setIsFirstRender] = useState(true);
  const themes = {
    light: {
      name: "light",
      background: "#f8f9fa",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };

  useEffect(() => {
    if (isFirstRendered) {
      setIsFirstRender(false);
      return;
    }
    const todoStr = JSON.stringify(todo);
    localStorage.setItem("todo-react", todoStr);
  }, [todo]);

  useEffect(() => {
    const todoStr = localStorage.getItem("todo-react");
    if (!todoStr) setTodo([]);
    else setTodo(JSON.parse(todoStr));
  }, []);

  const addTodo = (title, completed) => {
    setTodo([{ title: title, completed: completed }, ...todo]);
  };

  const deleteTodo = (idx) => {
    todo.splice(idx, 1);
    setTodo([...todo]);
  };
  const markTodo = (idx) => {
    todo[idx].completed = !todo[idx].completed;
    setTodo([...todo]);
  };

  const moveUp = (idx) => {
    if (idx == 0) return;
    let temp = todo[idx];
    todo[idx] = todo[idx - 1];
    todo[idx - 1] = temp;
    setTodo([...todo]);
  };

  const moveDown = (idx) => {
    if (idx == todo.length - 1) return;
    let temp = todo[idx];
    todo[idx] = todo[idx + 1];
    todo[idx + 1] = temp;
    setTodo([...todo]);
  };

  const handlerInput = (event) => {
    if (event.key == "Enter") {
      if (event.target.value === "") {
        alert("Todo cannot be empty");
        return;
      }
      addTodo(event.target.value, false);
      event.target.value = "";
    }
  };
  const [selTheme, setSelTheme] = useState(themes.light);
  const toggleTheme = () => {
    if (selTheme.name === "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };

  return (
    <div className="bg-light">
      <Navbar />
      <hr />
      <div style={{ backgroundColor: selTheme.background }}>
        {/* Entire App container (required for centering) */}

        <div style={{ maxWidth: "800px" }} className="mx-auto">
          <ThemeContext.Provider value={{ selTheme, toggleTheme }}>
            {/* App header */}
            <p
              className="display-4 text-center fst-italic m-4"
              style={{ color: selTheme.foreground }}
            >
              Minimal Todo List <span className="fst-normal">☑️</span>
            </p>
            {/* Input */}
            <div className="d-flex">
              <input
                className="form-control fs-4 "
                placeholder="insert todo here..."
                onKeyUp={handlerInput}
              />

              <button className="btn btn-dark button " onClick={toggleTheme}>
                {selTheme.name === "light" && <IconSunHigh />}
                {selTheme.name === "dark" && <IconMoon />}
              </button>
            </div>
            {todo.map((element, index) => (
              <Todolist
                key={index}
                title={element.title}
                completed={element.completed}
                onMark={() => markTodo(index)}
                onDelete={() => deleteTodo(index)}
                onMoveUp={() => moveUp(index)}
                onMoveDown={() => moveDown(index)}
              />
            ))}

            {/* summary section */}
            <p className="text-center fs-4">
              <span className="text-primary">All ({todo.length}) </span>
              <span className="text-warning">
                Pending (
                {todo.filter((element) => element.completed == false).length})
              </span>
              <span className="text-success">
                Completed (
                {todo.filter((element) => element.completed == true).length})
              </span>
            </p>
            {/* Made by section */}
            <p className="text-center mt-3 text-muted fst-italic">
              made by Thian Suwannakul 620610176
            </p>
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  );
}
