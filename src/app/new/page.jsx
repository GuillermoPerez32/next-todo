"use client";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      updateTask(params.id, task);
      toast.success("Task updated successfuly");
    } else {
      createTask(task);
      toast.success("Task created successfuly");
    }
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-10">
        <h2>{params.id ? "Editing Task" : "New Task"}</h2>
        <input
          name="title"
          type="text"
          placeholder="Write a task"
          onChange={handleChange}
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
        />
        <textarea
          name="description"
          placeholder="Write a description"
          onChange={handleChange}
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
        ></textarea>
        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          onClick={handleSubmit}
        >
          {params.id ? "Edit" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default New;
