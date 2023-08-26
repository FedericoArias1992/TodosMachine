import Confetti from "react-confetti";
const celebrationCondition = true;

function TodoCounter(props){
    return (
        <div class="titulo-container">
            <h2>Has Completado {props.completed} de {props.tasks} Tareas</h2>
            {(props.tasks !==0 && props.completed === props.tasks) && (
                celebrationCondition && (
                    <Confetti
                      width={340} // Ancho del área de confeti
                      height={300} // Alto del área de confeti
                    />
                  )
            )}
        </div>
            );
  }
  export { TodoCounter };