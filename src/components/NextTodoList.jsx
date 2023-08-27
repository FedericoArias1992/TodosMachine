import cancelIcon from '../components/icons8-cancel.svg';
import { TodoItem } from './TodoItem';

function NextTodoList({ showNewTodoList, showNewTodoButton, openNextTodoList, 
                      closeNextTodoList, todos, onComplete, onDelete,
                      CompletarTodo, eliminarTodo}){
    return (
        <div>
            {showNewTodoButton && (
            <button className="show-new-list-button" onClick={openNextTodoList}>Next →</button>
            )}
          {/* Mostrar el nuevo contenedor */}
          {showNewTodoList && (
            <div className="new-todo-list">
              <img className="next-todo-list-cancel-icon" src={cancelIcon} alt="Cancel Icon" onClick={closeNextTodoList} />
              <div className='new-titulo-container'>
                {todos.slice(8).map((todo) => (
                  <TodoItem state={todo.estado} texto={todo.tarea} 
                    onComplete={()=> CompletarTodo(todo.tarea)}
                    onDelete={()=> eliminarTodo(todo.tarea)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
    );
  }
  export { NextTodoList };