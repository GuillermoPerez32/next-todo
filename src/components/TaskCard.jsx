"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { toast } from "react-hot-toast";

function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure")) {
      deleteTask(task.id);
      toast.success("Task deleted successfuly");
    }
  };

  return (
    <div
      onClick={() => router.push(`/edit/${task.id}`)}
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 flex flex-col"
    >
      <div className="flex justify-between items-center">
        <h2>{task.title}</h2>
        <button
          onClick={handleDelete}
          className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center rounded-sm duration-75"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-300">{task.description}</p>
    </div>
  );
}

export default TaskCard;
