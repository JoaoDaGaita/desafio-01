import logoRocket from "../assets/rocket.svg"
import logoTodo from "../assets/todo.svg"

export function Header() {
  return (
    <div className="w-full h-[200px] flex bg-[#0D0D0D] shrink-0 gap-3 items-center justify-center">
      <img src={logoRocket} width={22} height={36} alt="" />
      <img src={logoTodo} width={92} height={48} alt="" />
    </div>
  )
}
