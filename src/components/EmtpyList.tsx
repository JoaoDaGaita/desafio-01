import logoClipboard from "../assets/clipboard.svg"

export function EmptyList() {
  return (
    <div className="flex px-6 py-16 flex-col justify-center items-center gap-4 self-stretch">
      <img src={logoClipboard} alt="" />
      <p className="text-[#808080] self-stretch text-center font-inter text-base not-italic font-bold leading-6">
        Você ainda não tem tarefas cadastradas
        <p className="text-[#808080]font-inter text-base font-normal not-italic leading-6">
          Crie tarefas e organize seus itens a fazer
        </p>
      </p>
    </div>
  )
}
