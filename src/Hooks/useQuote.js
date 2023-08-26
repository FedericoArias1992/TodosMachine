import { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios

function useQuote(){
//Vamos a crear un customHook para obtener una frase motivacional y renderizarla:
  const [motivationalQuote, setMotivationalQuote] = useState("");

  useEffect(() => {
    // Función asincrónica para obtener la frase motivacional
    async function fetchMotivationalQuote() {    

  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    params: {
      language_code: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '64417eafe3msh5c8ba7617cc207ap1ed67ajsn01efeb448fcf',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios(options);
      const quote = response.data.content; // Obtenemos la cita desde la respuesta
      setMotivationalQuote(quote);
      console.log(quote);
  } catch (error) {
    console.error("Error al obtener la frase motivacional:", error);
  }
}
    // Llamamos a la función para obtener la frase motivacional cuando el componente se monta
    fetchMotivationalQuote();
  }, []);
 // Devuelve el valor motivationalQuote para que pueda ser utilizado fuera del hook.
 return motivationalQuote;
}
  export { useQuote };