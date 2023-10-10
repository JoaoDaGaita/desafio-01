import { Task } from "./Task"
import { useTasksContext } from "../hooks/useTaskContext"
import { EmptyList } from "./EmtpyList"

export function List() {
  const { tasks } = useTasksContext()

  const isEmptyListOfTasks = tasks.length === 0

  return (
    <>
      {isEmptyListOfTasks ? (
        <EmptyList />
      ) : (
        <>
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </>
      )}
    </>
  )
}
