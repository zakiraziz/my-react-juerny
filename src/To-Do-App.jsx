import React, { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    // Uncomment to persist in localStorage
    // return JSON.parse(localStorage.getItem("tasks")) || [];
    return [];
  });
  const [input, setInput] = useState("");

  // Uncomment to save tasks in localStorage
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTasks([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">📝 To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-md outline-none"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-4 rounded-r-md hover:bg-indigo-700"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2 mb-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`bg-gray-100 p-2 rounded-lg flex justify-between items-center ${
                task.completed ? "opacity-60 line-through" : ""
              }`}
            >
              <span
                className="cursor-pointer"
                onClick={() => toggleComplete(index)}
                title="Click to mark complete"
              >
                {task.text}
              </span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {tasks.length > 0 && (
          <button
            onClick={clearAllTasks}
            className="w-full bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition"
          >
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  );
}
