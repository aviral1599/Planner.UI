// 'use client';

// import { TaskCard } from "@/components/TaskCard";

// type Task = {
//   id: string;
//   title: string;
// };

// type Props = {
//   tasks: Task[];
// };

// export const Tasks = ({ tasks }: Props) => {
//   return (
//     <div className="space-y-4">
//       {tasks.map((task) => (
//         <TaskCard key={task.id} task={task} />
//       ))}
//     </div>
//   );
// };

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/lib/api";    

// ✅ Define Props Interface
interface TaskListProps {
  mode: "today" | "week" | "month";
}

// 👇 Props: Use `mode` and type it
export default function TaskList({ mode }: TaskListProps) {
  const [tasks, setTasks] = useState<Array<{ id: string; title: string; checked: boolean }>>([]);
  const [showModal, setShowModal] = useState(false);

  // ✅ Fetch tasks whenever mode changes
  useEffect(() => {
    async function fetchTasks() {
      try {
        // const res = await fetch(`/api/tasks?mode=${mode}`);
        const res = await api.get("/Tasks");
        // const data = await res.json();
        setTasks(res.data);
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      }
    }

    fetchTasks();
  }, [mode]);

  return (
    <div className="space-y-4 min-h-[130px]">
      {tasks.length === 0 && (
        <p className="text-gray-500 italic">No tasks for {mode}.</p>
      )}

      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center bg-white rounded-lg shadow p-3 transition duration-300 hover:shadow-lg"
          >
            <Checkbox checked={task.checked} />
            <span className="ml-3 flex-1">{task.title}</span>
            <Button size="icon" variant="ghost" onClick={() => setShowModal(true)}>
              <PencilIcon className="h-5 w-5 text-blue-500" />
            </Button>
          </motion.div>
        ))}
      </AnimatePresence>

      <Button
        className="mt-2"
        onClick={() => setShowModal(true)}
        variant="secondary"
      >
        <PlusIcon className="mr-1 h-4 w-4" />
        Add Task
      </Button>
    </div>
  );
}
