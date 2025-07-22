// import { Container } from "@/components/Container";
// import { Heading } from "@/components/Heading";
// import { Highlight } from "@/components/Highlight";
// import { Paragraph } from "@/components/Paragraph";
// import { Products } from "@/components/Products";
// import { TechStack } from "@/components/TechStack";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <Container>
//       <span className="text-4xl">👋</span>
//       <Heading className="font-black">Hello there! I&apos;m John</Heading>
//       <Paragraph className="max-w-xl mt-4">
//         I&apos;m a full-stack developer that loves{" "}
//         <Highlight>building products</Highlight> and web apps that can impact
//         millions of lives
//       </Paragraph>
//       <Paragraph className="max-w-xl mt-4">
//         I&apos;m a senior software engineer with{" "}
//         <Highlight>7 years of experience</Highlight> building scalable web apps
//         that are performance optimized and good looking.
//       </Paragraph>
//       <Heading
//         as="h2"
//         className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
//       >
//         What I&apos;ve been working on
//       </Heading>
//       <Products />
//       <TechStack />
//     </Container>
//   );
// }

// 'use client';

// import { useEffect, useState } from "react";
// import { Container } from "@/components/Container";
// import { Heading } from "@/components/Heading";
// import { Tasks } from "@/components/Tasks"; // the one that maps and shows tasks
// import api from "@/lib/api";

// type Task = {
//   id: string;
//   title: string;
//   list: string;
//   section: string;
//   completed: boolean;
//   subtasks: string[];
// };

// export default function Home() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [newTaskTitle, setNewTaskTitle] = useState("");

//   // ✅ Fetch tasks from API
//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const res = await api.get("/Tasks"); // Your actual API route
//         setTasks(res.data);
//       } catch (err) {
//         console.error("Error fetching tasks:", err);
//       }
//     };

//     fetchTasks();
//   }, []);

//   // ✅ Post new task
//   const addTask = async () => {
//     if (!newTaskTitle.trim()) return;

//     const newTask: Omit<Task, "id"> = {
//       title: newTaskTitle,
//       list: "Today",
//       section: "General",
//       completed: false,
//       subtasks: [],
//     };

//     try {
//       const res = await api.post("/Tasks", newTask);
//       setTasks((prev) => [...prev, res.data]); // Append new task to UI
//       setNewTaskTitle("");
//     } catch (err) {
//       console.error("Error adding task:", err);
//     }
//   };

//   return (
//     <Container>
//       <Heading className="font-black mb-6 text-3xl bg-gray-100 px-2 py-1 rounded-md w-fit">
//         📝 Today’s Tasks
//       </Heading>

//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
//         <input
//           placeholder="Add a new task..."
//           value={newTaskTitle}
//           onChange={(e) => setNewTaskTitle(e.target.value)}
//           className="w-full sm:w-96 bg-white p-2 rounded-md shadow-sm"
//         />
//         <button
//           onClick={addTask}
//           className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-md"
//         >
//           Add
//         </button>
//       </div>

//       {/* ✅ Render tasks */}
//       <Tasks tasks={tasks} />
//     </Container>
//   );
// }

// "use client";

// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import TaskList from "@/components/Tasks";

// export default function TaskTabs() {
//   const [tab, setTab] = useState<"today" | "week" | "month">("today");

//   return (
//     <div className="mt-8 max-w-2xl mx-auto px-4">
//       <Tabs value={tab} onValueChange={(value) => setTab(value as "today" | "week" | "month")}>
//         <TabsList className="mb-4 justify-center">
//           <TabsTrigger value="today">Today</TabsTrigger>
//           <TabsTrigger value="week">Week</TabsTrigger>
//           <TabsTrigger value="month">Month</TabsTrigger>
//         </TabsList>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={tab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <TabsContent value={tab}>
//               <TaskList mode={tab} />
//             </TabsContent>
//           </motion.div>
//         </AnimatePresence>
//       </Tabs>
//     </div>
//   );
// }


'use client';

import Index from "../pages/Index";

export default function HomePage() {
  return <Index />;
}



