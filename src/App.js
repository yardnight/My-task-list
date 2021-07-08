import React, {useEffect} from 'react';
import TodoList from './toDo/TodoList';
import Context from './context';
// import AddTodo from './toDo/AddTodo';
import Loader from './Loader';
import Modal from './Modal/Modal'

const AddTodo = React.lazy( 
  () => 
    new Promise(resolve => {
      setTimeout(() => {
        resolve(import('./toDo/AddTodo'))
      }, 1200
      )
    })
)



function App() {
  const [todos, setTodos] = React.useState([
    // {id: 1, completed: true, title: ' Встановити Node.js з доповненнями'},
    // {id: 2, completed: true, title: ' Перевірити наявність hpx -v'},
    // {id: 3, completed: true, title: ' Створити React app з консолі'},
    // {id: 4, completed: false, title: ' Корегувати структуру'},
    // {id: 5, completed: false, title: ' Вивчити технологію JSX'}
  ])

  const [loading, setLoading] = React.useState(true)
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 1200)
        
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
    
  }

  function removeTodo(id) {
    setTodos( todos.filter(todo => todo.id !== id)
      )
  }

  function addTodo (title) {
    setTodos(
      todos.concat ([
        {
          title,
          id: Date.now(),
          completed: false,

        }
      ])
    )
  }


  return (
    <Context.Provider value={{removeTodo}}>
      <div className ='wrapper'>
        <h1 className ='header-title'>My task list</h1>
        <Modal/>
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate ={addTodo} />
        </React.Suspense >
        
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) :  loading ? null : (
          <p>No todos!</p>
        )}

      </div>
    </Context.Provider>
  )
}

export default App;
