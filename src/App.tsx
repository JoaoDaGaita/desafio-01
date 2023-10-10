import { useState } from "react"

import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { TasksContext } from "./hooks/useTaskContext"

import "./index.css"

export interface TaskProps {
  id: number
  title: string
  isCompleted: boolean
}

const tasksList = [
  {
    id: 1,
    title: "Drink Water",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Go to the Grocery",
    isCompleted: false,
  },
]

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(tasksList)
  const [completedTasks, setCompletedTasks] = useState(0)

  return (
    <div className="">
      <TasksContext.Provider
        value={{ tasks, setTasks, completedTasks, setCompletedTasks }}
      >
        <Header />
        <Container />
      </TasksContext.Provider>
    </div>
  )
}

export default App
