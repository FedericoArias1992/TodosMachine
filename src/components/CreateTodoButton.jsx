
function CreateTodoButton( {showModal}){
    return (
        <div class="button-container">
            <button onClick={showModal}>
                Crear Tarea
            </button>
        </div>
    );
  }
  export { CreateTodoButton };