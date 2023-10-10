import { Dispatch, SetStateAction, createContext, useContext } from "react"
import { TaskProps } from "../App"

interface TaskContextProps {
  tasks: TaskProps[]
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
  completedTasks: number
  setCompletedTasks: Dispatch<SetStateAction<number>>
}

export const TasksContext = createContext<TaskContextProps | undefined>(
  undefined
)

export function useTasksContext() {
  const tasks = useContext(TasksContext)

  if (tasks === undefined) {
    throw new Error("useTasksContext must be used with a TasksContext")
  }
  return tasks
}
