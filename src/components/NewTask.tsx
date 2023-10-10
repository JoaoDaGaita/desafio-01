import { FormEvent, useState } from "react"
import logoPlus from "../assets/plus.svg"
import { TaskProps } from "../App"
import { useTasksContext } from "../hooks/useTaskContext"

export function NewTask() {
  const { tasks, setTasks } = useTasksContext()
  const [newTaskTitle, setNewTaskTitle] = useState<TaskProps>({
    id: 0,
    title: "",
    isCompleted: false,
  })

  function handleNewTaskChange(e: FormEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity("")
    setNewTaskTitle({
      id: Math.random(),
      title: e.currentTarget.value,
      isCompleted: false,
    })
  }

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()
    if (newTaskTitle === undefined) {
      throw new Error("The task title cannot be undefined.")
    }
    setTasks([...tasks, newTaskTitle])
    setNewTaskTitle((prev) => ({
      ...prev,
      title: "",
    }))
  }

  return (
    <form
      className="flex h-[54px] mt-[-27px] gap-2"
      onSubmit={handleCreateNewTask}
    >
      <input
        className="flex-1 items-center gap-2 p-4 bg-[#262626] rounded-lg
        border-gray-700 font-inter text-base not-italic font-normal
        leading-6 text-[#808080] focus:outline-none"
        onChange={handleNewTaskChange}
        value={newTaskTitle?.title}
      />
      <button
        type="submit"
        className="flex p-4 justify-center items-center gap-2 bg-[#1E6F9F] rounded-lg text-[#F2F2F2]"
      >
        <p className="font-inter text-[#F2F2F2] text-sm not-italic font-bold leading-5">
          Criar
        </p>
        <img src={logoPlus} width={16} height={16} alt="" />
      </button>
    </form>
  )
}
