import logo from './logo.svg';
import Aos from 'aos';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap';
import "aos/dist/aos.css"
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logopng from "../src/logopng.png"

import a1 from "../src/Portafolio/l1.png"
import a2 from "../src/Portafolio/l2.png"
import a3 from "../src/Portafolio/l3.png"
import a4 from "../src/Portafolio/l4.png"

import a5 from "../src/Portafolio/l5.png"
import a6 from "../src/Portafolio/l6.png"
import a7 from "../src/Portafolio/l7.png"
import a8 from "../src/Portafolio/l8.png"
import a9 from "../src/Portafolio/a1.png"
import a10 from "../src/Portafolio/a2.png"
import a11 from "../src/Portafolio/a3.png"
import a12 from "../src/Portafolio/a4.png"
//import imagenes
import mision from "../src/Portafolio/misiondf.png"
import vision from "../src/Portafolio/visiondf.png"
import banner from "../src/Portafolio/banner.png"
import histo from "../src/Portafolio/histodf.png"



//aromaticas
import aro1 from "../src/Portafolio/aro1.png"
import aro2 from "../src/Portafolio/aro2.png"
import aro3 from "../src/Portafolio/aro3.png"
import aro4 from "../src/Portafolio/aro4.png"
import aro5 from "../src/Portafolio/aro5.png"
import aro6 from "../src/Portafolio/aro6.png"
import aro7 from "../src/Portafolio/aro7.png"
import aro8 from "../src/Portafolio/aro8.png"
import aro9 from "../src/Portafolio/aro9.png"
import aro10 from "../src/Portafolio/aro10.png"
import aro11 from "../src/Portafolio/aro11.png"
// frutales
import f1 from "../src/Portafolio/f1.png"
import f2 from "../src/Portafolio/f2.png"
import f3 from "../src/Portafolio/f3.png"


import whataspp from "../src/w.png";
import facebook from "../src/f.png";
import instagram from "../src/i.png";
function App() {
 
 

  const value = () => {
    const btn = document.getElementById('btn');
    console.log(btn.textContent );
    if(btn.textContent==="Ver más"){

      document.getElementById('btn').innerHTML= "Ver menos";
   

    }
     if(btn.textContent===("Ver menos")) {
      document.getElementById('btn').innerHTML= "Ver más";
      
    }
}
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p8xdbr2', 'template_ycq6b5w', form.current, 'mvlxMFNWIuv-CHLM5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };


  useEffect(() => {

    Aos.init({ duration: 3000 })
  }, []);
  return (
    <div className="App">

      <nav class="navbar fixed-top navbar-expand-lg " >
        <a class="navbar-brand" > <img className='logo' src={logo}></img></a>
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src={logopng} width="50" height="50" alt="" />PLÁNTULAS
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav navbar-left">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#inicio">INICIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#nosotros">NOSOTROS</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#productos">PRODUCTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#beneficios">BENEFICIOS</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#contacto">CONTACTO</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <div class="col-md-12" >
        <img src={banner} data-aos="fade-up" class="img" />

      </div>
      <br /> <br /> <br />
      <div class="col-md-12" >
        <h3 className='title' >ALIADOS</h3>
      </div>
      <div className='pc'>
        <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={a1} className='pro' alt="..." />
                <img src={a2} className='pro2' alt="..." />
                <img src={a3} className='pro' alt="..." />
                <img src={a4} className='pro2' alt="..." />

              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={a5} className='pro' alt="..." />
                <img src={a6} className='pro' alt="..." />
                <img src={a7} className='pro' alt="..." />
                <img src={a8} className='pro' alt="..." />

              </div>
            </div>
            <div class="carousel-item">
              <div className="content">
                <img src={a9} className='pro' alt="..." />
                <img src={a10} className='proc2' alt="..." />
                <img src={a11} className='pro' alt="..." />
                <img src={a12} className='pro' alt="..." />

              </div>
            </div>


          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='cell'>
        <div id="carouselExampleControls4" class="carousel slide" data-bs-ride="carousel" data-aos="flip-left">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="content">
                <img src={a1} className='proc' alt="..." />
                <img src={a2} className='proc2' alt="..." />


              </div>
            </div>
            <div class="carousel-item">
              <div className="content">

                <img src={a3} className='proc' alt="..." />
                <img src={a4} className='proc2' alt="..." />

              </div>
            </div>
            <div class="carousel-item">
              <div className="content">

                <img src={a5} className='proc' alt="..." />
                <img src={a6} className='proc' alt="..." />

              </div>
            </div><div class="carousel-item">
              <div className="content">

                <img src={a7} className='proc' alt="..." />
                <img src={a8} className='proc' alt="..." />

              </div>
            </div>


          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br /><br /><br /><br />
      <div id='inicio' class="row">
        <div class="col-md-6">

          <h2 class="subheading" data-aos="fade-right" >Misión</h2>
          <br />
          <h3 data-aos="fade-right">Brindar al cliente un servicio eficiente y de calidad, potencializando y promoviendo el agro colombiano, contribuyendo al desarrollo del país .</h3>

        </div>
        <div class="col-md-6">
          <img className='bannerimg' src={vision} alt="" />
        </div>

      </div>
      <div id='inicio' class="row">
        <div class="col-md-6">
          <img className='bannerimg' src={mision} alt="" />
        </div>
        <div class="col-md-6">

          <h2 class="subheading" data-aos="fade-right" >Visión</h2>
          <br />
          <h3 data-aos="fade-right">Ser una empresa líder y competitiva a nivel nacional en la producción de plántulas de Aromáticas, Frutales y Hortalizas.  Buscando ser reconocidos por buscar el desarrollo de la agricultura en el país.</h3>

        </div>


      </div>
      <br /><br /><br /><br />
      <h2 id='nosotros'>Nuestra historia</h2>
      <div id='inicio' class="row">
        <div class="col-md-6">
          <img className='img-h' src={histo} alt="" />
        </div>
        <div class="col-md-6">
          <br /><br />
         <b> <p className='t-center' data-aos="fade-right">Somos una empresa legalmente constituida con sede en el encantador departamento de Cundinamarca, en el municipio de Funza. Nos enorgullecemos de nuestra sólida presencia y reconocimiento en el mercado, cumpliendo rigurosamente con las normas nacionales e internacionales como distribuidores de plántulas para cultivo de hortalizas, raíces, aromáticas y tubérculos.
Nuestros productos se destacan por su alta calidad y trazabilidad, diseñados específicamente para satisfacer las necesidades de los clientes más exigentes en el sector agrícola. Contamos con una tecnificación de primer nivel en los procesos de germinación y plantación, asegurando el desarrollo y la productividad que demanda el mercado agrícola actual
 trabajamos exclusivamente con semillas certificadas e importadas, sujetas a un riguroso control sanitario que es esencial en el sector agroindustrial. Nos enorgullece contribuir a la excelencia y el éxito de los cultivos de nuestros clientes, ofreciéndoles siempre lo mejor en calidad y servicio.
¡Bienvenidos a nuestra comunidad agrícola! Nos apasiona lo que hacemos y estamos comprometidos con el progreso y el crecimiento sostenible de nuestros clientes y del sector en general. Siempre nos esforzamos por brindar soluciones innovadoras y a la medida de sus necesidades.
Gracias por confiar en PLÁNTULAS JR SAS, estamos aquí para ser tu socio confiable en el mundo agrícola</p>
</b>
        </div>

        <div class="col-md-12" >
          <br /><br /><br /><br />
          <h3 className='title' id='productos' >PRODUCTOS</h3>
        </div>
        <div class="row">
          <div class="col-md-3 ">
            <br />
            <img className='plantula' src={f1} alt="" />
            <h4 class="subheading" data-aos="fade-right">Plántulas frutales</h4>

            <button onClick={value} id="btn" class="btn btn-secondary"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Ver más
            </button>
          </div>

          <div class="col-md-3 ">
            <br />
            <img className='mainprodutcs' src={aro10} alt="" />
            <h4 class="subheading" data-aos="fade-right">Plántulas aromáticas</h4>

            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
              Ver más
            </button>
          </div>

          <div class="col-md-3 ">
            <br />
            <img className='plantula' src={f1} alt="" />
            <h4 class="subheading" data-aos="fade-right">Semillas</h4>

            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
              Ver más
            </button>
          </div>
          <div class="col-md-3 ">
            <br />
            <img className='plantula' src={f1} alt="" />
            <h4 class="subheading" data-aos="fade-right">Hortalizas</h4>

            <button class="btn btn-secondary" type="button">
              Ver más
            </button>
          </div>
        </div>
        <div class="collapse" id="collapseExample">


          <br />

          <div class="row">
          <div class="col-md-12" >
          <br /><br /><br /><br />
          <h3 className='title' id='productos' >Plántulas frutales</h3>
        </div>
            <div class="col-md-3 " >
              <br />
              <img className='mainprodutcs' src={f1} alt="" />
              <h6 class="subheading" >Maracuyá</h6>
            </div >
            <div class="col-md-3 " >
              <br />
              <img className='mainprodutcs' src={f2} alt="" />
              <h6 class="subheading" >Curuba</h6>
            </div >
            <div class="col-md-3 " >
              <br />
              <img className='mainprodutcs' src={f3} alt="" />
              <h6 class="subheading" >Uchuva</h6>
            </div >
          </div>

        </div>

        <div class="collapse" id="collapseExample1">
          <div class="row">
          <div class="col-md-12" >
          <br /><br /><br /><br />
          <h3 className='title' id='productos' >Plántulas aromáticas</h3>
        </div>
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro1} alt="" />
              <h6 class="subheading" >Albahaca Nufar</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro2} alt="" />
              <h6 class="subheading" >Albahaca Dark Opal</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro3} alt="" />
              <h6 class="subheading" >Albahaca Mrs. Burn's Lemon</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro4} alt="" />
              <h6 class="subheading" >Cebollín Staro</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro5} alt="" />
              <h6 class="subheading" >Eneldo</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro6} alt="" />
              <h6 class="subheading" >Manzanilla</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro7} alt="" />
              <h6 class="subheading" >Mejorana Dulce</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro8} alt="" />
              <h6 class="subheading" >Ruda</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro9} alt="" />
              <h6 class="subheading" >Stevia</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro10} alt="" />
              <h6 class="subheading" >Tomillo</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src={aro11} alt="" />
              <h6 class="subheading" >Toronjil</h6>
            </div >
          </div>
        </div>
        <div class="collapse" id="collapseExample2">
          <div class="row">
          <div class="col-md-12" >
          <br /><br /><br /><br />
          <h3 className='title' id='productos' >Semillas</h3>
        </div>
        <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src="https://images.unsplash.com/photo-1661760194787-1f4d523f2eec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              <h6 class="subheading" >Ajo</h6>
            </div >
           
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src="https://www.flordeplanta.com.ar/wp-content/uploads/2016/08/remolacha1.jpg" alt="" />
              <h6 class="subheading" >Remolacha</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src="https://diario.madrid.es/huertosescolares/wp-content/uploads/sites/46/2019/05/calabacin-planta-300x201.jpg" alt="" />
              <h6 class="subheading" >Calabacin</h6>
            </div >
            <div class="col-md-4 " >
              <br />
              <img className='mainprodutcs' src="https://farm2.staticflickr.com/1028/1275775580_87fd5e8227_z.jpg" alt="" />
              <h6 class="subheading" >Brocoli</h6>
            </div >
            <div class="col-md-4 " >
            <br />
              
           <img className='mainprodutcs' src="https://images.unsplash.com/photo-1551239953-51cf8954aa5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
           <h6 class="subheading" >Cebolla cabezona</h6>
         </div >
            <div class="col-md-4 " >
            <br />
              
              <img className='mainprodutcs' src="https://images.unsplash.com/photo-1602496874897-6dda29009587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
              <h6 class="subheading" >Zanahoria</h6>
            </div >

         
          </div>
        </div>
      </div>

      <br></br><br></br><br></br><br></br><br></br>
      <div class="col-md-12" >
        <h3 className='title' id='productos' >SERVICIOS</h3>
      </div><br /><br />

      <div class="row">
        <div class="col-md-6">

          <h2 class="te" data-aos="fade-right" >Plantulación</h2>

          <h5 className='te' data-aos="fade-right">Manejamos un sistema de programación de siembras,que nos ayuda a tener un compromiso con nuestros clientes.</h5>

        </div>
        <div class="col-md-6">
          <img className='mainprodutcs'data-aos="fade-right" src="https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
          <br /><br />
        </div>
        <div class="col-md-6">

          <h2 class="te" data-aos="fade-right" >Maquila</h2>
          <h5 className='te' data-aos="fade-right">Si el cliente lo desea,también contamos con el servicio de maquila</h5>

        </div>
        <div class="col-md-6">
          <img className='mainprodutcs'data-aos="fade-right" src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="" />
          <br /><br />
        </div>
        <div class="col-md-6">

          <h2 class="te" data-aos="fade-right" >Huertas caseras</h2>

          <h5 className='te' data-aos="fade-right">Los días Sábados,abrimos nuestras puertas a todos aquellos que desean adquirir plántulas para proyectos caseros</h5>

        </div>
        <div class="col-md-6">

          <img className='mainprodutcs'data-aos="fade-right" src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
          <br /><br />
        </div>
      </div>

      <div class="col-md-12" >
        <h3 className='title' id='beneficios'>BENEFICIOS</h3>
      </div>
      <section  >
        <div class="row">
          <div class="col-md-4 "data-aos="fade-right" >
            <div class="container py-5">
              <div class="row justify-content-center">

                <div class="card text-black">
                  <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                  <img src={aro10}
                    class="card-img-top" alt="Apple Computer" />
                  <div class="card-body">
                    <div class="text-center">
                      <h5 class="card-title">Tomillo</h5>

                    </div>
                    <div>

                      <div class="d-flex justify-content-center">
                        <span className='c-content'>Por sus propiedades antiespasmódica, expectorante y antiséptica, el tomillo está especialmente indicado en el tratamiento de ciertas afecciones de las vías respiratorias altas, particularmente las que cursan con tos irritativa, laringitis, bronquitis, asma, enfisema y gripe.</span>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-4 " data-aos="fade-right">
            <div class="container py-5">
              <div class="row justify-content-center">
                <div class="card text-black">
                  <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                  <img src={aro1}
                    class="card-img-top" alt="Apple Computer" />
                  <div class="card-body">
                    <div class="text-center">
                      <h5 class="card-title">Albahaca</h5>

                    </div>
                    <div>

                      <div class="d-flex justify-content-center">
                        <span className='c-content'>La albahaca es muy rica en calcio, básico para reforzar huesos y dientes, y potasio, que regula el contenido de agua de las células y su movimiento, además de moderar el sistema nervioso y muscular e intervenir en la construcción de proteínas.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 " data-aos="fade-right">
            <div class="container py-5">
              <div class="row justify-content-center">
                <div class="card text-black">
                  <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                  <img src={aro6}
                    class="card-img-top" alt="Apple Computer" />
                  <div class="card-body">
                    <div class="text-center">
                      <h5 class="card-title">Manzanilla</h5>

                    </div>
                    <div>
                      <div class="d-flex justify-content-center">
                        <span className='c-content'>La gran variedad de beneficios para la salud que aporta la manzanilla, Ayuda a una buena digestió.n,Reduce el estrés y Cuida nuestro sistema inmunitario</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <blockquote class="blockquote text-center">
        <h1 class="mb-0" id='contacto' data-aos="fade-up">CONTACTO</h1>

      </blockquote>
      <br />
      <div class="row">
        <div class="col-md-6" data-aos="fade-up">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31808.542390774284!2d-74.27092751629039!3d4.758230354496287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f788b60b51b35%3A0x86a4e8224f5f6b0c!2sMarsella%2C%20Funza%2C%20Ceuta%2C%20Funza%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1687030854986!5m2!1ses!2sco"
            className='mapa' style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </div>
        <div class="col-md-6" data-aos="fade-up">

          <div className='center'>
            <form ref={form} onSubmit={sendEmail} className='form-controller'>
              <input class="text" name='from_name' type='text' placeholder='Nombre completo' />
              <input class="text" name='correo' type='text' placeholder='Correo electronico' />
              <input class="text" name='telefono' type='number' placeholder='Numero de telefono' />
              <textarea class="textm" name='message' type="text" placeholder='Mensaje' />
              <button type='submit' class="btn btn-success">Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <br/>
      <div class ="row">
        <div class="col-md-3" >
     <p>Correo: <br/>  plantulasjrluis@gmail.com<br/>
     contacto@plantulasjr.com</p>
</div>
<div class="col-md-3" >

     <p >Telefono: <br/> (+57) 3118491338<br/></p>
     </div>
     <div class="col-md-3" >
     <p >Dirección: <br/>vereda el Cocli,Funza, Cundinamarca</p>
     </div>
     <div class="col-md-3" >
     <p >Horario: <br/> lunes a viernes: 7:30 am a 12:00m <br/> 1:00 pm a 5:00 pm
     <br/> sábados: 7:30 am a 1:00 pm</p>
     </div>
    
      </div>
      <footer class=" text-center text-lg-start">

      <div className='row'>
          <div class="col-md-8" >
            <div className='dereca'>
              <div class="text-center p-3" >

                <a class="text-white">© 2023 Copyright:  PLÁNTULAS   </a>

              </div>
            </div>
          </div>
          <div class="col-md-4" >

            <div className='dereca'>
              <div className='m-a-c'> Por: Ecoproyectsas</div>
            </div>
          </div>
        </div>
      </footer>
      <div id='delegar' fill="currentColor" >
        <a href='https://instagram.com/plantulasjrsas?igshid=NTc4MTIwNjQ2YQ=='>
          <img className='i1' src={instagram}></img>
        </a>
      </div>

      <div id='delegar1' fill="currentColor" >
        <a href='https://www.facebook.com/profile.php?id=100094930822060'>
          <img className='i2' src={facebook}></img>
        </a>
      </div>
      <div id='delegar2' fill="currentColor" >
        <a href='https://wa.link/7wvn27'>
          <img className='i3' src={whataspp}></img>
        </a>
      </div>
    </div>
  );
}

export default App;
