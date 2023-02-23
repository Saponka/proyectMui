import React from 'react';
//images banners
import marvel from "../assets/image/logos/EUDgcqJXYAAAotp.png";
import spidey from "../assets/image/banners/banner.jpg";
import america from "../assets/image/banners/banneramerica.jpg";
import wolverine from "../assets/image/banners/wolverinebanner.jpg";
import hulk from "../assets/image/banners/bannerhulk.jpg";
import ironman from "../assets/image/banners/ironmanbanner2.jpg";
import thor from "../assets/image/banners/thorbanner_1.webp";
import strange from "../assets/image/banners/strangebanner.jpg";
import fury from "../assets/image/banners/furybanner.jpg";
import widow from "../assets/image/banners/blackwbanner.jpg";
import ant from "../assets/image/banners/antmanbanner.jpg";
import team from "../assets/image/banners/teamup.jpg";
import { textAlign } from '@mui/system';



const Marvel = () => {
  return (
    <div>
      <div>
        <section>
          <div class="marvelTitulo">
            <img
              src={marvel}
              alt="marvel comics"
              id="imglogomarvel"
              class="animate__animated animate__fadeInDown"
              
            />
          </div>
          <div class="historia">
            <p>
              <a href="https://es.wikipedia.org/wiki/Marvel_Comics">
               
                Marvel Cómics
              </a>
              es una editorial norteamericana de cómics. Es conocida
              popularmente como "La casa de las ideas" por la creación de
              numerosos personajes emblemáticos del género de superhéroes.
              Algunos de sus cómics más conocidos son Los 4 Fantásticos,
              Spider-Man, Daredevil, Capitán América, Los Vengadores, Iron Man,
              Hulk, Wolverine y los X-Men. Desde los años 60 la compañía
              constituye una de las mayores editoriales de este género.
              Localizada en Nueva York, fue fundada en el 387 de Park Avenue
              South, teniendo sus oficinas en la actualidad en el 40th East 10th
              Avenue. <br />
              El 31 de agosto de 2009, la empresa The Walt Disney Company
              anuncia la compra de la marca Marvel Entertainment por 4.000
              millones de dólares, traspasando así cerca de 5000 personajes al
              mundo Disney Enterprises, Inc.
            </p>
          </div>
        </section>
        <br />
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 style={{textAlign: "center"}} class="display-4"> Inicio</h1>
          </div>
        </div>
        <br />
        <p class="lead">
          El 31 de agosto de 1939 la industria del cómic a nivel mundial fue
          testigo del lanzamiento de la publicación que representó la primera
          piedra de La Casa de las Ideas: MARVEL COMICS #1. Con historias como
          The Human Torch, The Angel, Submariner, Masked Raider y Ka-Zar The
          Great, la editorial Timely nos presentó el primer cómic, donde la
          acción el misterio y la aventura encontraron lugar que han habitado a
          lo largo de ocho décadas.....
        </p>
        <hr />
        <br />
{/* 
        <div class="container" id="marvel">
          <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="col ">
              
              <div
                class="modal fade"
                id="mv1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img
                    src="../img/marvel/1.jpg"
                    alt=""
                    class="img-fluid rounded"
                  />
                </div>
              </div>
             
              <div class="card h-100 card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/1.jpg"
                  class="card-img-top img-fluid"
                  alt="marvel"
                />
                <div class="card-body">
                  <h5 class="card-title">Marvel Comics </h5>
                  <h6 class="card-title">Marvel Comics #1</h6>
                  <p class="card-text">
                    Profesor Horton celebra una conferencia con la prensa,
                    dispuesto a revelar su creación al mundo: el primer
                    androide. Revela que hay un problema difícil con su
                    descubrimiento. Conduciendo a la prensa al laboratorio,
                    Horton señala a un hombre en una jaula de cristal hermética
                    al que llama La Antorcha Humana. Cuando se deja entrar aire
                    en la cámara, todo el cuerpo del hombre se incendia
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    {" "}
                    Bill Everett, Al Anders, Tohm Dixon, Carl Burgos, Ray Gill,
                    Paul Gustavson, y Ben Thompson
                  </p>
                </div>
                <div class="card-body">
                  <a href="" class="btn btn-danger">
                    Bibliografia
                  </a>
                  <a
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#mv1"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Fuente: Marvel,1939</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="modal fade"
                id="mv2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img
                    src="../img/marvel/cap/1.jpg"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/cap/1.jpg"
                  class="card-img-top img-fluid"
                  alt="Capitan America #1"
                />
                <div class="card-body">
                  <h5 class="card-title">Capitan America</h5>
                  <h6 class="card-title">Capitan America Vol 1 #1</h6>
                  <p class="card-text">
                    Serie de superhéroes que apareció en los cómics
                    estadounidenses poco antes de que este país participara en
                    la II Guerra Mundial. Se estrenó en Captain America Comics
                    #1 (marzo de 1941), por el sello editor Timely Comics y de
                    la mano de Joe Simon y Jack Kirby. El personaje es el alter
                    ego de Steve Rogers, un débil joven que alcanza la
                    perfección física con la ayuda de un suero destinado a crear
                    el soldado perfecto, que deberá ayudar en los esfuerzos
                    bélicos de su país.
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">Jack Kirby</p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Capit%C3%A1n_Am%C3%A9rica"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv2"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente:Marvel ‘Captain America’ #1, 1941.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p class="lead">
          En 1961, la editorial que habría de ser Marvel Comics destacaba
          únicamente por sus cómics de monstruos y por el trabajo de dos de sus
          dibujantes, <b>Jack Kirby y Steve Ditko</b> .Sin embargo, en noviembre
          de 1961 aparecía <b>Fantastic Four</b> , una serie que bebía de la
          moda de los superhéroes y que rápidamente se ganó el favor del público
          gracias al desarrollo de sus personajes, cuya caracterización era
          mucho más realista que la de otros títulos superheroicos.
          <b> Los 4 Fantásticos</b> serían el pistoletazo de salida para otras
          series y personajes, como <b>Astonishing Ant Man</b> en enero de 1962,{" "}
          <b>The Incredible Hulk</b> en mayo de 1962, <b>Spider-Man</b> en el
          último número de
          <i>Amazing Fantasy</i> en agosto de 1962, <b>Thor</b> el número de{" "}
          <i>Journey Into Mystery</i> de agosto de 1962,
          <b>Iron Man</b> en el número de <i>Tales of Suspense</i> de marzo de
          1963, <b>la Avispa</b> en el número de <i>Tales to Astonish</i> de
          junio de 1963 y <b>el Doctor Extraño</b> en el número de{" "}
          <i>Strange Tales</i> de junio de 1963.
        </p>
        <br />
        <div class="container" id="marvel">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div
                class="modal fade"
                id="mv3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img src="../img/marvel/f4.jpg" class="img-fluid rounded" />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/f4.jpg"
                  class="card-img-top img-fluid"
                  alt="4 Fantasticos"
                />
                <div class="card-body">
                  <h5 class="card-title">Fantastic Four </h5>
                  <h6 class="card-title">Fantastic Four Vol 1 #1</h6>
                  <p class="card-text">
                    Una figura sombría dispara una bengala por una ventana. La
                    bengala forma las palabras "¡Los Cuatro Fantásticos!" Susan
                    Storm está tomando el té con una amiga. Cuando ve la
                    bengala, se vuelve invisible, se sube a un taxi, y ofrece al
                    sorprendido conductor un billete cuando llega a su destino.
                    Ben Grimm intenta encontrar un abrigo que le quede bien. Un
                    dependiente de la mercería ve la bengala. Grimm irrumpe por
                    la puerta demasiado pequeña...
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritor: Stan Lee Dibujante: Jack Kirby Entintadores:
                    George Klein Christopher Rule Colorista: Stan Goldberg
                    Rotulador: Artie Simek Editor: Stan Lee
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Los_4_Fant%C3%A1sticos"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv3"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente:Marvel ‘Fantastic Four’#1, 1961.
                  </small>
                </div>
              </div>
            </div>
            <div class="col ">
              <div
                class="modal fade"
                id="mv4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img
                    src="../img/marvel/antman.jpg"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="card h-100 card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/antman.jpg"
                  class="card-img-top img-fluid"
                  alt="Ant-Man"
                />
                <div class="card-body">
                  <h5 class="card-title">Tales of Atonish Vol 1 #27</h5>
                  <h6 class="card-title">"¡El Hombre del Hormiguero!"</h6>
                  <p class="card-text">
                    ¡El Doctor Henry Pym declara el éxito! Ha utilizado con
                    éxito su suero reductor para encoger una silla hasta el
                    tamaño de una muñeca y ha utilizado su suero ampliador para
                    devolverla a su tamaño normal. Pym había sido ridiculizado
                    hace meses por sus extravagantes teorías, pero ahora ha
                    perfeccionado un par de sueros capaces de cambiar el tamaño
                    de cualquier objeto. Seguro de que sus sueros funcionan, Pym
                    los prueba en sí mismo.
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritores: Stan Lee. Larry Lieber. Dibujante: Jack Kirby
                    Entintador: Dick Ayers. Rotulador: Artie Simek.. Editores:
                    Stan Lee.
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Hombre_Hormiga"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv4"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente: Marvel, Primera Aparicion Ant-Man, 1962
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="modal fade"
                id="mv5"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img src="../img/marvel/Hulk.jpg" class="img-fluid rounded" />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/Hulk.jpg"
                  class="card-img-top img-fluid"
                  alt="Hulk"
                />
                <div class="card-body">
                  <h5 class="card-title">The Incredible Hulk</h5>
                  <h6 class="card-title">Incredible Hulk Vol 1 #1</h6>
                  <p class="card-text">
                    En una base del ejército en el desierto, el Dr. Bruce Banner
                    está preparando la primera prueba de su invento, la bomba G.
                    El general "Thunderbolt" Ross quiere saber por qué Banner
                    sigue retrasando la prueba. Su hija Betty intenta calmarlo,
                    con poco éxito. Banner le dice a Ross que ha comenzado la
                    cuenta atrás final.{" "}
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritor: Stan Lee Dibujante: Jack Kirby Tintas: Paul
                    Reinman Rotulador: Artie Simek Editor: Stan Lee
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Hulk"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv5"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente: Marvel, ‘The Incredible Hulk’#1, 1962.
                  </small>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div
                class="modal fade"
                id="mv6"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img
                    src="../img/marvel/spiderman/los-10-comics-mas-caros-de-la-historia-.jpg"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/spiderman/los-10-comics-mas-caros-de-la-historia-.jpg"
                  class="card-img-top img-fluid"
                  alt="Spiderman"
                />
                <div class="card-body">
                  <h5 class="card-title">Amazing Fantasy Vol 1 #15</h5>
                  <h6 class="card-title"> "¡Spider-Man!"</h6>
                  <p class="card-text">
                    Peter Parker, un estudiante de instituto tímido y sin
                    pretensiones, prefiere la compañía de sus profesores a la de
                    sus compañeros, que le llaman "el único alhelí profesional
                    de Midtown High". Sus únicos parientes vivos, el tío Ben y
                    la tía May, tienen una mala opinión de él. Una noche,
                    mientras asiste a una demostración de radiactividad en los
                    Laboratorios General Techtronics East, Parker no se da
                    cuenta de que una araña cae a través de un "rayo radiactivo"
                    y recibe una dosis masiva de radiación. Le muerde y muere.
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritores: Stan Lee Steve Ditko Dibujante: Steve Ditko
                    Entintador: Steve Ditko Colorista: Stan Goldberg Rotulador:
                    Artie Simek Editor: Stan Lee
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Spider-Man"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv6"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente:Marvel Primera Aparicion Peter Parker/Spider-Man,
                    1962
                  </small>
                </div>
              </div>
            </div>

            <div class="col ">
              <div
                class="modal fade"
                id="mv7"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img src="../img/marvel/thor.jpg" class="img-fluid rounded" />
                </div>
              </div>
              <div class="card h-100 card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/thor.jpg"
                  class="card-img-top img-fluid"
                  alt="Thor"
                />
                <div class="card-body">
                  <h5 class="card-title">Journey into Mystery #83</h5>
                  <h6 class="card-title">Presentamos ... ¡el poderoso Thor!</h6>
                  <p class="card-text">
                    ¡El superhéroe más emocionante de todos los tiempos! Cuando
                    los Hombres de Piedra de Saturno invaden la Tierra, solo el
                    Dr. Donald Blake puede detenerlos, pero no tiene ninguna
                    posibilidad, no hasta que golpee un palo de madera en el
                    suelo y se encuentre transformado en Thor, ¡Dios del Trueno!
                    ¡Mira cómo Thor aprende a manejar su martillo en la batalla!
                    ¡Solo este nuevo héroe puede salvar la Tierra de ser
                    conquistada!
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritores: Stan Lee, Larry Lieber Dibujantes: Don Heck,
                    Jack Kirby, Steve Ditko
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Thor_(c%C3%B3mic)"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv7"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente: Marvel, Journey into Mystery #83,1962
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="modal fade"
                id="mv8"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img
                    src="../img/marvel/ironman/Tales-of-Suspense-39-00.jpg"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/ironman/Tales-of-Suspense-39-00.jpg"
                  class="card-img-top img-fluid"
                  alt="IronMan"
                />
                <div class="card-body">
                  <h5 class="card-title">Tales of Suspense #39</h5>
                  <h6 class="card-title">¡Iron Man ha nacido!</h6>
                  <p class="card-text">
                    Cuando Stark, un brillante fabricante de armas, es capturado
                    y se le ordena que desarrolle armas para un malvado tirano,
                    en su lugar, forja una poderosa armadura de hierro que le da
                    poder para escapar, ¡y salvaguarda su corazón herido! La
                    atrevida transformación de Stark finalmente lo coloca en un
                    camino de redención que lo convertiría en uno de los héroes
                    más poderosos de la Tierra:¡el invencible Iron Man!.
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">Stan Lee, Larry Lieber y Don Heck</p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Iron_Man"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv8"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    
                    Fuente: Marvel,Tales-of-Suspense #39,1963
                  </small>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="row row-cols-md-3 g-4">
            <div class="col">
              <div
                class="modal fade"
                id="mv9"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img src="../img/marvel/wasp.jpg" class="img-fluid rounded" />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/wasp.jpg"
                  class="card-img-top img-fluid"
                  alt="Wasp"
                />
                <div class="card-body">
                  <h5 class="card-title">Tales to Astonish #44</h5>
                  <h6 class="card-title"> "The Creature from Kosmos!"</h6>
                  <p class="card-text">
                    Al regresar de otra misión, Ant-Man vive en su soledad y la
                    pérdida de su difunta esposa: Maria Pym. Volviendo al
                    pasado, nos enteramos de que en su luna de miel, Henry y
                    Maria Pym visitaron la Hungría natal de Maria, a pesar de
                    los temores de Henry de que su historia como prisionera
                    política la convirtiera en un objetivo.
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritores: Stan Lee H.E. Huntley Dibujante: Jack Kirby
                    Tintas: Don Heck Rotulador: Art Simek Editor: Stan Lee
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Avispa_(c%C3%B3mic)"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv9"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente: Marvel,Tales-of-Suspense #44,1963
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="modal fade"
                id="mv10"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img
                    src="../img/marvel/ironman.jpg"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/ironman.jpg"
                  class="card-img-top img-fluid"
                  alt="IronMan"
                />
                <div class="card-body">
                  <h5 class="card-title">Tales of Suspense #48</h5>
                  <h6 class="card-title">
                    "The New Iron Man Battles... The Mysterious Mr. Doll!"
                  </h6>
                  <p class="card-text">
                    Pepper Potts le da la noticia a Anthony Stark de que uno de
                    sus socios comerciales, el magnate del acero Charleton
                    Carter, se ha retirado de un trato. Stark no comprende por
                    qué Carter ha hecho esto y se dirige a la propiedad de
                    Carter para abordar el asunto personalmente. Una vez allí,
                    ve a un hombre sospechoso vestido con un traje extraño que
                    se esconde en las sombras...
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritor: Stan Lee Dibujante: Steve Ditko Tintas: Dick Ayers
                    Rotulador: Sam Rosen
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Iron_Man"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv10"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente: Marvel,Tales-of-Suspense #48,1963
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="modal fade"
                id="mv11"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <button
                  type="button"
                  class="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div class="modal-dialog">
                  <img
                    src="../img/marvel/strange.jpg"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="card h-100  card text-white bg-dark mb-3  card border-danger mb-3">
                <img
                  src="../img/marvel/strange.jpg"
                  class="card-img-top img-fluid"
                  alt="Dr Strange"
                />
                <div class="card-body">
                  <h5 class="card-title">Strange Tales #110</h5>
                  <h6 class="card-title">
                    "Doctor Strange Master of Black Magic!"
                  </h6>
                  <p class="card-text">
                    Un hombre atormentado por pesadillas acude al Doctor Strange
                    en busca de ayuda. Doctor Strange promete ayudar. Viaja en
                    forma de espíritu a su antiguo maestro que vive en un remoto
                    templo de montaña en Asia. El maestro le dice a Strange que
                    dependa de su amuleto mágico si el peligro amenaza. De
                    vuelta en su forma mortal, Strange visita al hombre al que
                    ha prometido ayudar..
                  </p>
                  <h6 class="card-title">Autores</h6>
                  <p class="card-text">
                    Escritor: Stan Lee Dibujos: Steve Ditko Tintas: Steve Ditko
                    Colores: Stan Goldberg Rotulador: Terry Szenics Editor: Stan
                    Lee
                  </p>
                </div>
                <div class="card-body">
                  <a
                    href="https://es.wikipedia.org/wiki/Doctor_Strange"
                    class="btn btn-warning"
                  >
                    Bibliografia
                  </a>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#mv11"
                    class="btn btn-warning"
                  >
                    Zoom
                  </a>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Fuente:Marvel,Strange Tales #110,1963
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div> */}



        <br />
        <hr />
        <br />

        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 style={{textAlign: "center"}} class="display-4"> Personajes</h1>
          </div>
        </div>
        <br />
        <hr />
        
       {/*  */}
        <div style={{textAlign: "center"}} class="banners">
          <div class="card bg-dark text-white" style={{maxWidth: 800 }}>
            <img
              src={spidey}
              className="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
              
            </div>
            <h4 class="card-title">Spiderman</h4>
          </div>
          <hr />
        
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={wolverine}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
              
            </div>
            <h4 class="card-title">Wolverine</h4>
          </div>
          <hr />
          
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={hulk}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
              
            </div>
            <h4 class="card-title">Hulk</h4>
          </div>
          <hr />
          
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={america}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
              
            </div>
            <h4 class="card-title">Capitan America</h4>
          </div>
          <hr />
         
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={ironman}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
              
            </div>
            <h4 class="card-title">Ironman</h4>
          </div>
          <hr />
         
          <div class="card bg-dark text-warning" style={{maxWidth: 800}}>
            <img
              src={thor}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
              
            </div>
            <h4 class="card-title">Thor</h4>
          </div>
          <hr />
         
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={strange}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
             
            </div>
            <h4 class="card-title">Dr Strange</h4>
          </div>
          <hr />
          
          <div class="card bg-dark text-danger" style={{maxWidth: 800}}>
            <img
              src={ant}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
             
            </div>
            <h4 class="card-title">Antman and The Wasp</h4>
          </div>
          <hr />
         
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={widow}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
             
            </div>
            <h4 class="card-title">Black Widow</h4>
          </div>
          <hr />
         
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={fury}
              class="card-img "
              style={{height: 250}}
              alt="..."
            />
            <div class="card-img-overlay">
             
            </div>
            <h4 class="card-title">Nick Fury</h4>
          </div>
          <hr />
        </div>
        <hr />
        {/*  <!-- banner --> */}
        <div class="banners">
          
          <div class="card bg-dark text-white" style={{maxWidth: 800}}>
            <img
              src={team}
              class="card-img img-fluid"
              style={{height: 330,width: 780}}
              alt="..."
            />
            <div class="card-img-overlay">
              <a href="../html/marvelTeamUp.html" class="btn btn-warning">
                Team Up
              </a>
            </div>
            <h4 class="card-title">Avengers vs X-Men</h4>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Marvel;
