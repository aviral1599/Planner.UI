import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Flag, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'todo' | 'in-progress' | 'completed' | 'overdue';
  dueDate?: string;
  dueTime?: string;
  category: string;
  categoryColor: string;
  subtasks?: number;
  completedSubtasks?: number;
}

interface TaskCardProps {
  task: Task;
  onToggle?: (taskId: string) => void;
  onEdit?: (taskId: string) => void;
  onDelete?: (taskId: string) => void;
}

const priorityConfig = {
  low: { color: "bg-priority-low", label: "Low" },
  medium: { color: "bg-priority-medium", label: "Medium" },
  high: { color: "bg-priority-high", label: "High" },
  urgent: { color: "bg-priority-urgent", label: "Urgent" },
};

const statusConfig = {
  todo: { color: "border-task-todo", bgColor: "bg-task-todo" },
  'in-progress': { color: "border-task-in-progress", bgColor: "bg-task-in-progress" },
  completed: { color: "border-task-completed", bgColor: "bg-task-completed" },
  overdue: { color: "border-task-overdue", bgColor: "bg-task-overdue" },
};

export const TaskCard = ({ task, onToggle, onEdit, onDelete }: TaskCardProps) => {
  const isCompleted = task.status === 'completed';
  const isOverdue = task.status === 'overdue';
  
  return (
    <Card 
      className={cn(
        "group hover:shadow-md transition-all duration-200 cursor-pointer",
        statusConfig[task.status].color,
        isCompleted && "opacity-75"
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          {/* Checkbox */}
          <Checkbox
            checked={isCompleted}
            onCheckedChange={() => onToggle?.(task.id)}
            className="mt-1"
          />

          {/* Task Content */}
          <div className="flex-1 min-w-0">
            {/* Title and Actions */}
            <div className="flex items-start justify-between">
              <h3 
                className={cn(
                  "font-medium text-sm leading-5",
                  isCompleted && "line-through text-muted-foreground"
                )}
              >
                {task.title}
              </h3>
              
              {/* Action Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => onEdit?.(task.id)}>
                    <Edit className="mr-2 h-3 w-3" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onDelete?.(task.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="mr-2 h-3 w-3" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Description */}
            {task.description && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {task.description}
              </p>
            )}

            {/* Subtasks Progress */}
            {task.subtasks && (
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Subtasks</span>
                  <span>{task.completedSubtasks || 0}/{task.subtasks}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                  <div 
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${((task.completedSubtasks || 0) / task.subtasks) * 100}%` 
                    }}
                  />
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between mt-3">
              {/* Left side - Category and Priority */}
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="outline" 
                  className="text-xs"
                  style={{ borderColor: task.categoryColor }}
                >
                  <div 
                    className="w-2 h-2 rounded-full mr-1"
                    style={{ backgroundColor: task.categoryColor }}
                  />
                  {task.category}
                </Badge>
                
                <Badge 
                  variant="outline"
                  className={cn(
                    "text-xs",
                    priorityConfig[task.priority].color,
                    "text-white border-transparent"
                  )}
                >
                  <Flag className="w-2 h-2 mr-1" />
                  {priorityConfig[task.priority].label}
                </Badge>
              </div>

              {/* Right side - Due Date/Time */}
              {(task.dueDate || task.dueTime) && (
                <div className={cn(
                  "flex items-center space-x-1 text-xs",
                  isOverdue ? "text-destructive" : "text-muted-foreground"
                )}>
                  {task.dueDate && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{task.dueDate}</span>
                    </div>
                  )}
                  {task.dueTime && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{task.dueTime}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};