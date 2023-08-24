import checkIcon  from './icons8-done.svg';
import cancelIcon from './icons8-cancel.svg';
import React, { useState } from "react"; //Los estados deben estar en el componente papa y ser pasados al componente hijo

function TodoItem( { texto, state, todo, setTodos, onComplete, onDelete }){
  return (
    <li className={`todo-item ${state === 'Pendiente' ? 'tarea-pendiente' : 'tarea-completada'}`}>
      <img className="checked-icon" src={checkIcon} alt="Check Icon" onClick={onComplete}/>
      <p>{ texto }</p>
      <p>{ state }</p>
      <img className="cancel-icon" src={cancelIcon} alt="Cancel Icon" onClick={onDelete}/>
    </li>
  );
}
export { TodoItem }