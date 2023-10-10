import { useTasksContext } from "../hooks/useTaskContext"

export function Info() {
  const { tasks, completedTasks } = useTasksContext()
  return (
    <div className="flex justify-between mt-16 items-end self-stretch">
      <div className="flex items-center gap-2">
        <strong className="font-inter text-[#4EA8DE] text-sm not-italic font-bold leading-normal">
          Tarefas Criadas
        </strong>
        <div className="max-w-[25px] flex px-2 py-[2px] rounded-full bg-[#333] flex-col justify-center items-center gap-[10px]">
          <strong className="font-inter text-[#D9D9D9] text-xs not-italic font-bold">
            {tasks.length}
          </strong>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <strong className="text-[#8284FA] font-inter text-sm not-italic font-bold leading-normal">
          Concluídas
        </strong>
        <div className="max-w-[25px] flex px-2 py-[2px] rounded-full bg-[#333] flex-col justify-center items-center gap-[10px]">
          <strong className="font-inter text-[#D9D9D9] text-xs not-italic font-bold">
            {completedTasks}
          </strong>
        </div>
      </div>
    </div>
  )
}
