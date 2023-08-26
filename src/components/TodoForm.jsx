import React, { useState } from "react";

function TodoForm({closeModal, addTodo}){
    const [newTodoValue, setNewTodoValue] = useState('');
    const onSubmit = (event) => {
        event.preventDefault(); // Evitar que el formulario recargue la página
        addTodo(newTodoValue);
        closeModal();
      };
    const onChange = (event)=> {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Ingresa el Todo para Realizar</h1>
            <input value={newTodoValue} onChange={onChange} placeholder="Agrega la tarea!" required />
            <div className="button-container">
                <button type="submit">
                    Guardar
                </button>
            </div>
        </form>
    );
  }
  export { TodoForm };