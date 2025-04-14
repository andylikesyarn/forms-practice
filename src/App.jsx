import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false); //this sets the initial value to false, so we don't render the wrong component.

  const [formData, setFormData] = useState({
    name: "",
    apellido: "",
    email: "",
    message: "",
    type: "",
    consent: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      [name]: type === "checkbox" ? checked : value,
    }));
    //prevFromData allows us to make a copy of formData, and then add new stuff
    // setFormData(newData) <- old way
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); //changes value of setSubmitted on click.
    /* setFormData({
      name: "",
      appellido: "",
      email: "",
      message: "",
      request: "",
      consent: "",
    });*/
    console.log(formData);
  };

  //https://www.w3schools.com/jsref/event_onsubmit.asp
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor

  return (
    <>
      {submitted ? (
        <p className="result"> Yay! Tu l'as fait!</p>
      ) : (
        //ok logically I knew this would work but it's kind of magical that it actually DID work
        /* based on this : https://stackoverflow.com/questions/43566107/javascript-if-else-on-submit 
      and this: https://www.youtube.com/watch?v=xRKvjWDZlW8
      
      but i wanted to see if i could do it w/ a ternery operator*/
        <form onSubmit={handleSubmit}>
          <br></br>
          <label htmlFor="name">Prénom</label>

          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>

          <label htmlFor="apellido">Nom de Famille</label>
          <input
            required
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          ></input>
          <br></br>
          <label htmlFor="email">Corriel</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          <br></br>
          <p>De quoi avez-vous besoin d'aide?</p>
          <label>
            <label>
              <input
                type="radio"
                name="type"
                id="general"
                value="general"
                onChange={handleChange}
                checked={formData.type === "general"}
              />{" "}
              Questiones Générales
            </label>
            <label>
              <input
                type="radio"
                name="type"
                id="request"
                value="request"
                onChange={handleChange}
                checked={formData.type === "request"}
              />{" "}
              Demander de L'aide
            </label>
          </label>
          <br></br>
          <label className="left" htmlFor="message">
            Écrivez votre message ici:
          </label>
          <br></br>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            cols="50"
          ></textarea>
          <br></br>
          <label htmlFor="consent">case à cocher de consentement:</label>
          <input
            required
            type="checkbox"
            id="consent"
            name="consent"
            value={formData.consent}
            onChange={handleChange}
          ></input>
          <br></br>
          <input type="submit"></input>
        </form>
      )}
    </>
  );
}

export default App;
