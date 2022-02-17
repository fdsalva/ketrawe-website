import React from "react";
import "./Contacto.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import axios from 'axios';


const Contacto = () => {

    const formId = 'AY2pHZCC';
    const formSparkUrl = `https://submit-form.com/${formId}`;

    const submitForm = async (event) => {
        event.preventedDefault();
        await postSubmit();
    }

    const postSubmit = async () => {
        const payload = {
            message: 'Testeo de formspark'
        }
        
        try{
            const resultado = await axios.post(formSparkUrl, payload);
            console.log(resultado);
        } catch(error) {    
            console.log(error);
        }
    
    };

  return (
    <>
      <Header />

      
        <main>
          <div className="container">
            <div className="row">
              <div className="col my-5">
                <h1>Contactános!</h1>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12 col-md-4">
                <ul className="d-flex flex-column align-items-start justify-content-center mt-4">
                  <a className="contact-a-ul my-2" href="/">
                    <li>3512285692</li>
                  </a>
                  <a className="contact-a-ul my-2" href="/">
                    <li>tiendaketrawe@gmail.com</li>
                  </a>
                </ul>
              </div>
              <div className="col-12 col-md-8 d-flex flex-column align-items-center justify-content-center">
                <form onSubmit={submitForm} action= {formSparkUrl} target='_blank'>
                  <div className="div d-flex flex-column align-items-start justify-content-center my-3">
                    <label htmlFor= 'name' className="py-2">Nombre</label>
                    <input className="py-2" type="text" id='name' placeholder="Ingrese su nombre y apellido" required />
                  </div>
                  <div className="div d-flex flex-column align-items-start justify-content-center my-3">
                    <label htmlFor= "email" className="py-2">Email</label>
                    <input className="py-2" type="email" name="email" placeholder="Ingrese su email" required />
                  </div>
                  <div className="div d-flex flex-column align-items-start justify-content-center my-3">
                    <label htmlFor="message" className="py-2">Mensaje</label>
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Escriba aquí su mensaje"
                    required
                    >
                    </textarea>
                  </div>
                  <div className="div d-flex flex-column align-items-start justify-content-center my-3">
                  <button type="submit" className="send">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      

      <Footer />
    </>
  );
};

export default Contacto;
