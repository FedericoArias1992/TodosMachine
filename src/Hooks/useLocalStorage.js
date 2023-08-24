import { useState, useEffect } from "react";
//Vamos a usar localstorage para tener persistencia de datos, sin usar base de datos relacional ni no relacionales
//let stringifiedArray = localStorage.setItem('Version_1', JSON.stringify(array)); //-> para inicializar la version_1 del Localstorage
//tambien vamos a crear un customhook para manejar todo lo relacionado a localstorage:
//necesitamos la funcion que actualice el estado de los elementos y a la vez el localstorage tal que exista persistencia de datos

function useLocalStorage(initialValue){
  const [item, setItem] = useState(initialValue); //asignamos el valor vacio o inicial al estado del customhook
  const [error, setError] = useState(false);     //creamos un estado para saber si hubo o no error en el renderizado
  useEffect(() => {
    try {
      let localstoragedArray = localStorage.getItem('Version_1');
      let parsedArray;
      if (!localstoragedArray) {
        localStorage.setItem('Version_1',JSON.stringify(initialValue));  //si Version_1 (primera vez que se abre la app) = Vacio -> array vacio, pq si no hay que mostrar, la app crashea!
        parsedArray = [];
      } else {
        parsedArray = JSON.parse(localstoragedArray);
        setItem(parsedArray); //asignamos el valor vacio o inicial al estado del customhook
      }
    } catch (error) {
      setError(true);
    }
  }, []);
  
     //al refrescar la pagina:
    const saveStateTodos = (newTodos) => {
      localStorage.setItem('Version_1', JSON.stringify(newTodos));  //reescribimos el array de todos actualizado
      setItem(newTodos);
    }
    return [item, saveStateTodos, error];  //saveStateTodos es el estados de los array persistente de todos, item es la lista de todos parseada
  }                                 //con esta desestructuracion de arrays como devolucion del customhook, ya podemos usar saveStateTodos()
  
export {useLocalStorage};