import react from 'react';
//import './App.css';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import React, { useState, useEffect } from "react"; //Los estados deben estar en el componente papa y ser pasados al componente hijo

// const array = [{tarea:'Estudiar 30 minutos al dia', estado:'Pendiente'},
//               {tarea:'Dormir 8 horas al dia', estado:'Pendiente'},
//               {tarea:'Tomar mate una vez por dia', estado:'Completado'},
//               {tarea:'Ir al Sauna', estado:'Pendiente'},
//               {tarea:'Pestañear', estado:'Completado'},
//               {tarea:'Terminar el Curso de React', estado:'Pendiente'},
//               {tarea:'Comer la comida', estado:'Completado'},
//               {tarea:'Reparar mi vida!', estado:'Pendiente'},
//               {tarea:'Reposar las costillas', estado:'Pendiente'},
// ]; ->  dsps en consola: localStorage.setItem('Version_1',JSON.stringify(array));

//Componente React
function App () {
  let [search, setSearch] = useState("");
  let [todos, saveStateTodos, error]= useLocalStorage([]);
      //console.log(todos[0]);  -> tarea + estado_tarea
      //console.log(typeof saveStateTodos); //->function -> es el customhook
  //Funcion para obtener la estadistica de cantidad de completados y totales
  const reducedResult = todos.reduce((accumulator, currentTask) => {
  accumulator.totalTasks++;
  if (currentTask.estado === 'Completado') {
    accumulator.completedTasks++;
  }
  return accumulator;
  }, { totalTasks: 0, completedTasks: 0 });

  // Filtra el array 'todos' basado en el valor de 'search'
  const filteredTodos = todos.filter(todo => {
    // Verifica si la tarea incluye la palabra introducida en 'search'
    return todo.tarea.toLowerCase().includes(search.toLowerCase());
  });

  //Creamos la funcion para actualizar el estado del todo a completado para pasarselo al todoItem tal que al presionar el
  //icono de tickeado aparezca completado
  const CompletarTodo = (tarea) => {
    const newTodos = [...todos];  //creamos una copia del array con la lista de todos tal que podamos actualizarla
    const todoIndex = newTodos.findIndex(
      (todo) => todo.tarea === tarea);
    newTodos[todoIndex].estado = "Completado";  //cambiamos el estado del todo apretado
    //setTodos(newTodos); -> antes de usar localstorage
    saveStateTodos(newTodos);   //persistimos el cambio con localstorage
  }
  //Creamos la funcion para actualizar el estado del vector todos a eliminar el todo al presionar el icono cancel en el todoItem
  const eliminarTodo =(tarea) => {
    let newTodos = [...todos];  //creamos un nuevo array con la lista de todos tal que podamos actualizarla
    const todoIndex = newTodos.findIndex(
      (todo) => todo.tarea === tarea);
    if (todoIndex !== -1) {
      newTodos.splice(todoIndex, 1); // Eliminamos el elemento en el índice todoIndex
      //setTodos(newTodos); // Actualizamos el estado con el nuevo array sin el elemento; -> antes de usar localstorage
      saveStateTodos(newTodos);
    }
  }
  //Vamos a crear un customHook para obtener una frase motivacional y renderizarla:
  const [motivationalQuote, setMotivationalQuote] = useState("");

  useEffect(() => {
    // Función asincrónica para obtener la frase motivacional
    async function fetchMotivationalQuote() {
      try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        //console.log(data[0]?.q);
        const quote = data[0]?.q; // Obtenemos la cita desde la respuesta
        setMotivationalQuote(quote);
      } catch (error) {
        console.error("Error al obtener la frase motivacional:", error);
      }
    }
    // Llamamos a la función para obtener la frase motivacional cuando el componente se monta
    fetchMotivationalQuote();
  }, []);
  

//Vamos a usar otro archivo para la interfaz
  return (
    <AppUI 
      reducedResult = {reducedResult}
      search = {search}
      setSearch = {setSearch}
      filteredTodos = {filteredTodos}
      CompletarTodo = {CompletarTodo}
      eliminarTodo = {eliminarTodo}
      motivationalQuote = {motivationalQuote}
      error ={error}
    />

  );

};

export default App;
