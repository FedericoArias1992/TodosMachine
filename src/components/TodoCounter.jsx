function TodoCounter(props){
    return (
        <div class="titulo-container">
            <h2>Has Completado {props.completed} de {props.tasks} Tareas</h2>
        </div>
    );
  }
  export { TodoCounter };