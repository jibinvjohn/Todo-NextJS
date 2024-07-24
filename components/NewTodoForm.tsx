import { newTodo } from "@/utils/actions"

const NewTodoForm =  (formData) => {
  return (

    <div>
        <form action={newTodo}>
            <input type="text" name="todo" className="border border-black/25" />
        <button type="submit">create</button>
        </form>
    </div>
  )
}

export default NewTodoForm