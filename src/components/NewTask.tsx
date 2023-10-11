import { FormEvent, useState } from "react"
import logoPlus from "../assets/plus.svg"

import { useTasksContext } from "../hooks/useTaskContext"

export function NewTask() {
  const { tasks, setTasks } = useTasksContext()
  const [title, setTitle] = useState("")

  function handleNewTaskChange(e: FormEvent<HTMLInputElement>) {
    e.currentTarget.setCustomValidity("")
    setTitle(e.currentTarget.value)
  }

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()
    let titleLengthValidate = title.trim()

    if (titleLengthValidate.length === 0) {
      alert("Input cannot be empty!")
      setTitle("")
      return
    }

    setTasks([...tasks, { id: Math.random(), title, isCompleted: false }])
    setTitle("")
  }

  const isNewTaskEmpty = title.length === 0

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
        value={title}
      />
      <button
        type="submit"
        disabled={isNewTaskEmpty}
        className="flex p-4 justify-center items-center gap-2 bg-[#1E6F9F] rounded-lg
                  disabled:cursor-not-allowed text-[#F2F2F2]"
      >
        <p className="font-inter text-[#F2F2F2] text-sm not-italic font-bold leading-5">
          Criar
        </p>
        <img src={logoPlus} width={16} height={16} alt="" />
      </button>
    </form>
  )
}
