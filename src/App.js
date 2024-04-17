import React from "react";
import TodoList from "./todo/TodoList";
import TodoForm from "./todo/TodoForm";

function App() {
    const [todos, setTodos] = React.useState([
        {id:1, completed:false, title:"Купить хлеб"},
        {id:2, completed:false, title:"Купить масло"},
        {id:3, completed:false, title:"Купить молоко"},
    ])
    function removeTodo(id) {
        console.log('remove this' + id)
        setTodos(todos.filter(todo => todo.id !== id));
    }
    // setInterval(()=> {
    //     console.log(todos)
    // }, 3000)
    function toggleTodo(id) {
        setTodos( todos.map(todo => {
            if (todo.id === id){
                return { ...todo, completed: !todo.completed };
            }
            return todo
        })
        )
    }
    function pushTodo(todo){
        setTodos([...todos, todo]);

    }
    const [editingTodo, setEditingTodo] = React.useState(null);
    function onRedaction(todo){
        setEditingTodo(todo);
    }
  return (
    <div className="wrapper">
      <h1>React ToDo List</h1>
       <TodoForm editingTodo={editingTodo}  todos={todos} todo={pushTodo}></TodoForm>
      <TodoList onRed={onRedaction} todos={todos} onRemove={removeTodo} onToggle={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
