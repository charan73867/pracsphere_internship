"use client";

import { Card, Button } from "@repo/ui";
import { Trash2, Check, Clock, AlertCircle } from "lucide-react";
import { format, isPast, parseISO } from "date-fns";
import type { Task } from "./TaskManager";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, currentStatus: string) => void;
}

export function TaskCard({ task, onDelete, onToggleStatus }: TaskCardProps) {
  const dueDate = parseISO(task.dueDate);
  const isOverdue = isPast(dueDate) && task.status === "pending";

  return (
    <Card
      className={`p-6 space-y-4 transition-all hover:shadow-lg ${
        isOverdue ? "border-red-500 border-2" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {task.title}
        </h3>
        <div
          className={`px-2 py-1 rounded text-xs font-medium ${
            task.status === "completed"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
          }`}
        >
          {task.status}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
        {task.description}
      </p>

      {/* Due Date */}
      <div className="flex items-center gap-2 text-sm">
        {isOverdue ? (
          <AlertCircle className="w-4 h-4 text-red-500" />
        ) : (
          <Clock className="w-4 h-4 text-gray-500" />
        )}
        <span className={isOverdue ? "text-red-500 font-medium" : "text-gray-500"}>
          Due: {format(dueDate, "MMM dd, yyyy")}
        </span>
      </div>

      {isOverdue && (
        <div className="text-xs text-red-600 dark:text-red-400 font-medium">
          ⚠️ Task is overdue!
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant={task.status === "completed" ? "outline" : "default"}
          size="sm"
          className="flex-1"
          onClick={() => onToggleStatus(task._id, task.status)}
        >
          <Check className="w-4 h-4 mr-2" />
          {task.status === "completed" ? "Mark Pending" : "Complete"}
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(task._id)}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
