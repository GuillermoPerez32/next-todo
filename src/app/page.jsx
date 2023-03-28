"use client";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const { tasks } = useTasks();
  const router = useRouter();

  return (
    <div>
      <div>
        <button onClick={() => router.push("/new")}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Home;
