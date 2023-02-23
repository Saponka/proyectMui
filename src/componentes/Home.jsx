import React from "react";
import "./estilos.css";
import zoom from "../../src/assets/image/logos/zoom.png";
import marvel from "../../src/assets/image/logos/EUDgcqJXYAAAotp.png";
import dc from "../../src/assets/image/logos/logo-dc-comics.jpg";
import darkhorse from "../assets/image/logos/DarkHorseLogo.jpg";
import idw from "../assets/image/logos/IDW-Logo.jpg";
import fm from "../assets/image/miller/franlmillerretrato.png";
import am from "../assets/image/moore/alanmoore.jpg";

//MUI
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  return (
    <div>
        <header class="head animate__animated animate__fadeInDown">
             <div class="titulo">
                  <h1 class="cartel animate__animated animate__swing animate__slower">
                     Comix
                  </h1>
                  <img src={zoom} alt="" class="img-fluid" style={{ width: 250 }} />
                  <br />
             </div>
        </header>
        <br />
        <hr />
        <h1 style={{textAlign: "center"}}>Editoriales</h1>
        <br />
        <div class=" main">
             <section class="logo">
                  <a href="/marvel" target="blank">
                     <div class="logoMarvel">
                         <img src={marvel} alt="marvel comics" id="logoMarvel" />
                     </div>
                  </a>
                  <a href="/dc" target="blank">
                     <div class="logodc">
                         <img src={dc} alt="" id="logodc" />
                    </div>
                  </a>
                  <a href="/dark" target="blank">
                     <div class="logodark">
                         <img src={darkhorse} alt="" id="logodark" />
                     </div>
                  </a>
                  <a href="/idw" target="blank">
                     <div class="logoidw">
                        <img src={idw} alt="" id="logoidw" />
                    </div>
                  </a>
             </section>
        </div>
        <hr />
        <div style={{textAlign: "center"}}>
            <h1>Pesos Pesados del Comic</h1>
            <br />
            <p>Hay 2 nombres que no pueden faltar: Frank Miller y Alan Moore,Tanto en
              sus trabajos originales, como en sus pasos por algunas de las
              franquicias más grandes de la industria, ambos autores han dejado una
              marca imborrable en la historia de un género del entretenimiento que
              les debe muchísimo. Sin embargo, por mucho que se les mencione juntos,
              no hay 2 artistas que estén tan lejanos entre ellos como Moore y
              Miller.
            </p>
            <br />
        </div>
       <div class="logo2">
           <h2>Frank Miller</h2>
           <div class="logofrankAlan">
               <a href="./html/miller.html" target="blank">
               <img src={fm} alt="frankMiller"  id="logofrankAlan" class="img-fluid"/>
               </a>
           </div>
           <h2 className="text-dark">Alan Moore</h2>
           <div class="logofrankAlan">
               <a href="./html/moore.html" target="blank" />
               <img src={am} alt="AlanMoore" id="logofrankAlan" class="img-fluid" />
           </div>
       </div>
       <hr />
       <hr />
       <section>
           <h1 id="grandes">Acerca de Nosotros</h1>
           <br/>
           <article>
               <p class="text-center"> Welcome Stranger en Comix Zoom queremos lograr introducirlos en el
                gigantesco mundo del comic Fandom, novelas graficas, personajes y
                demas freakeadas, pero en principal poder llegar a ser una mejor
                opcion de informacion sobre el genero.Nos Adentraremos en la
                historia de los comics pero lo mas importante los superheroes, las
                Editoriales mas grandes y sus mas conocidas obras, Los escritores y
                dibujantes mas respetados y mas prestigiosos, asi como en comics no
                tan conocidos pero escepcionales. Te invito a explorar y a conocer
                sobre el mundo de los comics, el noveno arte "COMICS".
               </p>
           </article>
           <br />
       </section>
       <hr />
       <section id="Contacto">
             <h1 id="grandes">Contacto</h1>
             <br/>
             <article>
                  <p class="text-center">Quieres en ponerte en contacto con nosotros, solo completa el
                    formulario y tu mensaje <br />
                    sera recibido inmediatamente para poder responder cualquier duda o
                    interes en general....
                  </p>
             </article>
             <br />
             <div class="container2">
                  <form id="formulario" action="https://formspree.io/f/xqkwyrny" method="post">
                        <div class="divContainer">
                           <input
                             type="text"
                             name="nombre"
                             id="nombre"
                             class="input"
                             placeholder="Ingrese su Nombre"
                             value=""
                             required
                             />
                           <label for="nombre" class="label">Nombre :</label>
                        </div>
                        <div class="divContainer">
                           <input
                             type="text"
                             name="apellido"
                             id="apellido"
                             class="input"
                             placeholder="Ingrese su Apellido"
                             value=""
                             required
                             />
                            <label class="label">Apellido :</label>
                       </div>
                       <div class="divContainer">
                           <input
                           type="number"
                           name="edad"
                           id="edad"
                           class="input"
                           placeholder="Ingrese su Edad"
                           value=""
                           required
                           />
                           <label for="" class="label">Edad :</label>
                       </div>
                       <div class="divContainer">
                           <input
                             type="number"
                             name="telefono"
                             id="telefono"
                             class="input"
                             placeholder="Ingrese su Telefono"
                             value=""
                             required
                            />
                           <label for="" class="label">Telefono :</label>
                       </div>
                       <div class="divContainer">
                           <input
                               type="text"
                               name="email"
                               id="email"
                               class="input"
                               placeholder="Ingrese su @mail"
                               value=""
                              required
                             />
                            <label for="" class="label">Email :</label>
                       </div>
                       <div>
                           <br />
                           <h4>Mensaje</h4>
                           <br />
                           <textarea
                           name="text"
                           id="mensaje"
                           cols="20"
                           rows="10"
                           placeholder="Mensaje"
                           class="textArea"
                           value=""
                           ></textarea>
                       </div>
                       {/* <button type="submit" className="btn btn-secondary" id="submit">Enviar</button> */}
                       <Button  color="secondary" variant="contained" endIcon={<SendIcon />}>Enviar</Button>
                       <br />
                </form>
             </div>
       </section>
       <br/>
       <hr></hr>
   </div>
  );
};

export default Home;
