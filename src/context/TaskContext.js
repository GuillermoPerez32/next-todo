"use client";
const { createContext, useContext, useState } = require("react");

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  return context;
};

const TaskProvider = ({ children }) => {
  const initialTasks = [
    {
      id: 1,
      title: "Go out",
      description: "Some task",
    },
    {
      id: 2,
      title: "Go in",
      description: "Some task",
    },
    {
      id: 3,
      title: "Study Programming",
      description: "Some task",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        ...task,
        id: tasks.length + 1,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newData) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === parseInt(id))
          return {
            ...task,
            ...newData,
          };
        return task;
      })
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
