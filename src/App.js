import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //State de frases

  const [frase, setFrase] = useState({});

  // AQUÍ LO HACEMOS CON PROMISE (.then)
  // const consultarAPI = () => {
  //   const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   //api nos da "promise (<pending>)" esto quiere decir que hay que añadir el then para traer la info de JSON
  //   const frase = api.then((respuesta) => respuesta.json());
  //   frase.then((resultado) => console.log(resultado));
  // };

  //tambien se puede hacer con ASYNC/AWAIT
  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    //api nos da "promise (<pending>)" esto quiere decir que hay que añadir el then para traer la info de JSON
    const frase = await api.json();
    setFrase(frase[0]);
  };

  //CARGAR UNA FRASE AUTOMATICAMENTE AL INICIAR LA PÁGINA
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div>
      <Contenedor>
        <Frase frase={frase} />
        <Boton onClick={consultarAPI}>Obtener frase</Boton>
      </Contenedor>
    </div>
  );
}

export default App;
