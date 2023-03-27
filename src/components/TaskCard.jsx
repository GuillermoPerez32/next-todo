"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";

function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure")) deleteTask(task.id);
  };

  return (
    <div
      onClick={() => router.push(`/edit/${task.id}`)}
      style={{ background: "#202020", color: "white" }}
    >
      <h2>{task.title}</h2>
      <button onClick={handleDelete}>Delete</button>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
