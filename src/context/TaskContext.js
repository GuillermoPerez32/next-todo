"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  return context;
};

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

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
