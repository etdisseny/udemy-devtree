
interface errorsProps{
    children:React.ReactNode
}
export const ErrorsMessage = ({children}:errorsProps) => {
  return (
    <div className="bg-red-100 text-sm text-red-800 uppercase font-bold p-3 text-center">{children}</div>
  )
}
