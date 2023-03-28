"use client";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const { tasks } = useTasks();
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
