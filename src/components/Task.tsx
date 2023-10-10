import { Trash } from "phosphor-react"
import { TaskProps } from "../App"
import { useTasksContext } from "../hooks/useTaskContext"
import { ChangeEvent, useState } from "react"

export function Task({ id, title, isCompleted }: TaskProps) {
  const { tasks, setTasks, setCompletedTasks } = useTasksContext()
  const [isChecked, setIsChecked] = useState(isCompleted)

  function handleDeleteTask() {
    const taskToBeDeletedOne = tasks.filter((task) => task.title !== title)
    setTasks(taskToBeDeletedOne)
  }

  function handleIsCompletedChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.currentTarget.checked)
    if (e.currentTarget.checked === true) {
      setCompletedTasks((state) => state + 1)
    } else setCompletedTasks((state) => state - 1)
  }

  return (
    <div
      className="flex mt-6 mb-3 p-4 items-start gap-3 self-stretch rounded-lg border border-solid border-[#333] bg-[#262626]
                        shadow-postShadow"
    >
      <input
        type="checkbox"
        onChange={handleIsCompletedChange}
        defaultChecked={isChecked}
        className="appearance-none flex w-6 h-6 p-[3.273px] justify-center items-center peer
                    rounded-full border-2 che border-[#4EA8DE] shrink-0
                    hover:border-[#1E6F9F] hover:bg-opacity-20 hover:border-opacity-100 hover:bg-[#1E6F9F]
                    checked:bg-checkedTrueHoverFalse checked:border-none checked:hover:bg-checkedTrueHoverTrue
                    "
      />
      <p className="font-inter text-[#F2F2F2] text-sm not-italic font-normal leading-5 peer-checked:line-through">
        {title}
      </p>
      <button
        onClick={handleDeleteTask}
        className="flex w-6 h-6 p-[5px] items-center justify-center ml-auto"
      >
        <Trash
          width={22}
          height={22}
          className="hover:text-[#E25858] text-[#808080] flex-shrink-0"
        />
      </button>
    </div>
  )
}
