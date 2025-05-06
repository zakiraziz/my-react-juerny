import React, { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([
        ...tasks,
        { 
          text: input, 
          completed: false,
          priority: "medium", // Added priority feature
          createdAt: new Date().toISOString()
        }
      ]);
      setInput("");
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = (index) => {
    const updated = [...tasks];
    updated[index].text = editText;
    setTasks(updated);
    setEditingIndex(null);
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

  const setPriority = (index, priority) => {
    const updated = [...tasks];
    updated[index].priority = priority;
    setTasks(updated);
  };

  // Sort tasks by priority (high first) and then by creation time
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return (
      priorityOrder[b.priority] - priorityOrder[a.priority] ||
      new Date(a.createdAt) - new Date(b.createdAt)
    );
  });

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
            className="bg-indigo-600 text-white px-4 rounded-r-md hover:bg-indigo-700 transition-colors"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2 mb-4">
          {sortedTasks.map((task, index) => (
            <li
              key={index}
              className={`bg-gray-50 p-3 rounded-lg flex justify-between items-center border ${
                task.completed ? "opacity-60 line-through" : ""
              } ${task.priority === "high" ? "border-red-200" : 
                 task.priority === "medium" ? "border-yellow-200" : "border-green-200"}`}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                  className="h-4 w-4"
                />
                
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => saveEdit(index)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(index)}
                    className="border-b outline-none"
                    autoFocus
                  />
                ) : (
                  <span
                    className="cursor-pointer"
                    onClick={() => toggleComplete(index)}
                  >
                    {task.text}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <select
                  value={task.priority}
                  onChange={(e) => setPriority(index, e.target.value)}
                  className="text-xs border rounded p-1"
                >
                  <option value="high">🔴 High</option>
                  <option value="medium">🟡 Medium</option>
                  <option value="low">🟢 Low</option>
                </select>

                {editingIndex !== index && (
                  <button
                    onClick={() => startEditing(index)}
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    ✏️
                  </button>
                )}

                <button
                  onClick={() => removeTask(index)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  ✖
                </button>
              </div>
            </li>
          ))}
        </ul>

        {tasks.length > 0 && (
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">
              {tasks.filter(t => t.completed).length}/{tasks.length} completed
            </div>
            <button
              onClick={clearAllTasks}
              className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
