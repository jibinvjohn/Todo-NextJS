import NewTodoForm from "@/components/NewTodoForm"

const DashboardLayout = ({children}) => {
  return (
    <div>DashboardLayout 
        <div><NewTodoForm/></div>
        {children}</div>
  )
}

export default DashboardLayout