"use client";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const New = ({ params }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { createTask, tasks, updateTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateTask(params.id, task);
    } else {
      createTask(task);
    }
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Write a task"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
      ></textarea>
      <button>{params.id ? "Edit" : "Save"}</button>
    </form>
  );
};

export default New;
