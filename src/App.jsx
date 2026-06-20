import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/Todoitems";
import "./App.css";
function App(){

  const todoitems = [
    {
      name: "buy milk",
      dueDate: "4/10/2023",
    },
    {
      name: "go to college",
      dueDate: "4/10/2023",
    },

]
  return <center className='todo-container'>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems  todoItems={todoitems}></TodoItems>
   
   
    </center>
    
}

export default App;