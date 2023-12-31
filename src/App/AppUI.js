import React, { useState, useEffect } from "react"; //Los estados deben estar en el componente papa y ser pasados al componente hijo
import '../styles.css';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';  
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import {EmptyTodos} from '../components/EmptyTodos'
import { Modal } from "../Modal";
import { TodoForm } from '../components/TodoForm';
import { NextTodoList } from "../components/NextTodoList";

function AppUI ({
  reducedResult,
  search,
  setSearch,
  filteredTodos,
  CompletarTodo,
  eliminarTodo,
  motivationalQuote,
  error,
  openModal,
  showModal,
  closeModal, 
  addTodo,
  showNewTodoList,
  setShowNewTodoList,
  closeNextTodoList,
  showNewTodoButton,
  openNextTodoList,
  todos
})
{
return (
  <div className="first-container">
  <div className="background-image">
    <div className="app-container">
      <div className="inspirational-quote">
        <h1>Frase del día:</h1>
        {motivationalQuote ? (
          <h2>{motivationalQuote}</h2>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div className="todo-list-container"> 
        <TodoCounter tasks={reducedResult.totalTasks} completed={reducedResult.completedTasks}/>
        <TodoSearch 
          search={search} setSearch={setSearch}
        />
        <TodoList />
          {error && <h1>Hubo un error al cargar los Todos!</h1>}
          {(!reducedResult.totalTasks) && <EmptyTodos />}
          {filteredTodos.map(todo => (    //usamos el estado inicial de los todos para renderizarlos
            <TodoItem key={todo.tarea} texto={todo.tarea} state={todo.estado} 
              onComplete={()=> CompletarTodo(todo.tarea)}
              onDelete={()=> eliminarTodo(todo.tarea)}
            />
          ))}
        <TodoList />
        <CreateTodoButton showModal={showModal}/>
          {openModal && (
          <Modal closeModal={closeModal}>
            <TodoForm closeModal={closeModal} addTodo={addTodo}/>
          </Modal>
        )}
        <NextTodoList todos={todos} openNextTodoList={openNextTodoList} 
          showNewTodoList ={showNewTodoList} setShowNewTodoList ={setShowNewTodoList} 
          showNewTodoButton ={ showNewTodoButton} closeNextTodoList={closeNextTodoList} 
          CompletarTodo = {CompletarTodo} eliminarTodo = {eliminarTodo} />
        <NextTodoList />
      </div>
    </div>
  </div>
  </div>
  );
};

export { AppUI };