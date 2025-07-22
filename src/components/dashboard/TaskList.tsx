import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Plus, SortAsc } from "lucide-react";
import api from "@/lib/api";
import { TaskCreateModal } from "./TaskCreateModal";

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "todo" | "in-progress" | "completed" | "overdue";
  dueDate?: string;
  dueTime?: string;
  category: string;
  categoryColor: string;
  subtasks?: number;
  completedSubtasks?: number;
  dueDateTime?: string; // Optional for parsing
}

// Mock task data
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Review quarterly reports",
    description:
      "Analyze Q3 performance metrics and prepare summary for stakeholders",
    priority: "high" as const,
    status: "in-progress" as const,
    dueDate: "Today",
    dueTime: "2:00 PM",
    category: "Work",
    categoryColor: "#10b981",
    subtasks: 3,
    completedSubtasks: 1,
  },
  {
    id: "2",
    title: "Morning workout routine",
    description: "45-minute cardio session at the gym",
    priority: "medium" as const,
    status: "completed" as const,
    dueDate: "Today",
    dueTime: "7:00 AM",
    category: "Health",
    categoryColor: "#ef4444",
  },
  {
    id: "3",
    title: "Study React Hooks patterns",
    description: "Complete chapter 5 of React documentation",
    priority: "high" as const,
    status: "todo" as const,
    dueDate: "Tomorrow",
    category: "Study",
    categoryColor: "#8b5cf6",
    subtasks: 4,
    completedSubtasks: 0,
  },
  {
    id: "4",
    title: "Buy groceries",
    description: "Weekly grocery shopping - check the list in notes app",
    priority: "low" as const,
    status: "todo" as const,
    dueDate: "Today",
    dueTime: "6:00 PM",
    category: "Personal",
    categoryColor: "#3b82f6",
  },
  {
    id: "5",
    title: "Team standup meeting",
    description: "Daily sync with development team",
    priority: "urgent" as const,
    status: "overdue" as const,
    dueDate: "Yesterday",
    dueTime: "9:00 AM",
    category: "Work",
    categoryColor: "#10b981",
  },
  {
    id: "6",
    title: "Plan weekend trip",
    description: "Research hotels and activities for the weekend getaway",
    priority: "low" as const,
    status: "todo" as const,
    dueDate: "Friday",
    category: "Personal",
    categoryColor: "#3b82f6",
  },
];

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // starts empty, will fill from API
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/Tasks", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Map each returned object to a full Task with defaults
        const tasks: Task[] = (response.data as Partial<Task>[]).map((t) => ({
          id: t.id || "",
          title: t.title || "",
          description: t.description ?? "",
          priority: t.priority || "medium",
          status: t.status || "todo",
          dueDate: t.dueDate ?? "",
          dueTime: t.dueTime ?? "",
          category: t.category || "",
          categoryColor: t.categoryColor || "#3b82f6",
          subtasks: t.subtasks ?? 0,
          completedSubtasks: t.completedSubtasks ?? 0,
          dueDateTime: t.dueDateTime ,
        }));

        tasks.forEach((task) => {
          if (task.id) {
            task.dueDate = parseDueDateTime(task.dueDateTime).dueDate;
            task.dueTime = parseDueDateTime(task.dueDateTime).dueTime;
          }
        });

        setTasks(tasks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  function parseDueDateTime(dueDateTime?: string): {
    dueDate: string;
    dueTime: string;
  } {
    if (!dueDateTime) return { dueDate: "", dueTime: "" };
    const date = new Date(dueDateTime);
    // Check for invalid date
    if (isNaN(date.getTime())) return { dueDate: "", dueTime: "" };
    return {
      dueDate: date.toISOString().slice(0, 10), // "YYYY-MM-DD"
      dueTime: date.toTimeString().slice(0, 5), // "HH:mm"
    };
  }

  const handleToggleTask = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: (task.status === "completed" ? "todo" : "completed") as
                | "completed"
                | "todo",
            }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleCreateTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || task.status === filterStatus;
    const matchesPriority =
      filterPriority === "all" || task.priority === filterPriority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const taskCounts = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "completed").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    overdue: tasks.filter((t) => t.status === "overdue").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Today's Tasks</h2>
          <p className="text-muted-foreground mt-1">
            {taskCounts.completed} of {taskCounts.total} tasks completed
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button className="gap-2" onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex items-center space-x-4">
        <Badge variant="outline" className="gap-2">
          <div className="w-2 h-2 rounded-full bg-task-completed" />
          Completed: {taskCounts.completed}
        </Badge>
        <Badge variant="outline" className="gap-2">
          <div className="w-2 h-2 rounded-full bg-task-in-progress" />
          In Progress: {taskCounts.inProgress}
        </Badge>
        <Badge variant="outline" className="gap-2">
          <div className="w-2 h-2 rounded-full bg-task-overdue" />
          Overdue: {taskCounts.overdue}
        </Badge>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-40">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterPriority} onValueChange={setFilterPriority}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="icon">
          <SortAsc className="h-4 w-4" />
        </Button>
      </div>

      {/* Task List */}
      <div className="grid gap-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No tasks found matching your criteria.
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </div>
      <TaskCreateModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onCreateTask={handleCreateTask}
      />
    </div>
  );
};
