import { NewTask } from "../components/NewTask"

import { List } from "../components/List"
import { Info } from "./Info"

export function Container() {
  return (
    <div className="max-w-[736px] justify-center m-auto px-8 items-center">
      <NewTask />
      <Info />
      <List />
    </div>
  )
}
