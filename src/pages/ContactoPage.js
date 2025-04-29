import React, { useState } from "react"; //mudulo6u4
import axios from "axios"; //modulo6u4
import "../style/contacto.css";
const ContactoPage = (props) => {
  const initialForm = {
    //intialForm inicia vacio en sus campos
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };
  //variables y sus modificadores arrancan con 0 o false y se modifican en el form
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm); //arranca el formulario con initialform

  //evento para tomar datos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      //toma los datos del form nombre, apellido
      ...oldData,
      [name]: value, //froma dinamica
    }));
  };
  //eventos para mostrar los datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
      //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contacto`);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`,formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form
          className="formulario"
          onSubmit={handleSubmit}
          action="/contacto"
          method="post"
        >
          <p>
            <label for="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </p>

          <p className="acciones">
            <input type="submit" value="Enviar"></input>
          </p>
        </form>
        {sending ? <p>Enviado...</p> : null}
        {msg ? <p>{msg}</p> : null}
      </div>
      <div className="datos">
        <h2>Otras vias de comunicación</h2>
        <p>
          También puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Telefono: 34456765</li>
          <li>Email: contacto@transportesx.com.ar</li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>Skype:</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
