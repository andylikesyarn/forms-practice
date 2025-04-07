import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false); //this sets the initial value to false, so we don't render the wrong component.

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); //changes value of setSubmitted on click.
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <br></br>
          <label htmlFor="name">Prénom</label>
          <input required type="text" id="name" name="name"></input>
          <label htmlFor="apellido">Nom de Famille</label>
          <input required type="text" id="apellido" name="apellido"></input>
          <br></br>
          <label htmlFor="email">Corriel</label>
          <input required type="email" id="email" name="email"></input>
          <br></br>
          <p>De quoi avez-vous besoin d'aide?</p>
          <label>
            <label>
              <input type="radio" name="type" value="general" /> Questiones
              Générales
            </label>
            <label>
              <input type="radio" name="type" value="request" /> Demander de
              L'aide
            </label>
          </label>
          <br></br>
          <label className="left" htmlFor="message">
            Écrivez votre message ici:
          </label>
          <br></br>
          <textarea id="message" name="message" rows="4" cols="50"></textarea>
          <br></br>
          <label htmlFor="consent">case à cocher de consentement:</label>
          <input required type="checkbox" id="consent" name="consent"></input>
          <br></br>
          <input type="submit"></input>
        </form>
      ) : (
        <p> Yay! Tu l'as fait!</p>
      )}
    </>
  );
}

export default App;
