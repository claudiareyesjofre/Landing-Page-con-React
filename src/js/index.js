//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


//render your react application
ReactDOM.render(<Principal />, document.querySelector("#app"));

function Principal(){
    return <div class="head">
        <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
<div class="card"> <Cardhead/> </div>
</div>    

}

function Cardhead(){
    return <div class="container">
        <div class="card bg-whithe text-white">
  <img src="https://revistaenfoque.cl/wp-content/uploads/2020/05/TorresDelPaine-guanacos.jpg" class=" img-thumbnail" alt="..." style={{height:"600px"}}/>
  <div class="card-img-overlay">
    <h1 class="card-title">Torres del Paine</h1>
    <p class="card-text ">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
    <p class="blockquote-footer text-white justicy-center">Torres del Paine posee distintos circuitos de trekking, los que se pueden realizar en períodos de 3 a 5 días y también cuenta con senderos de menor dificultad. Cabalgar por la pampa Serrano, pescar con mosca en el Río del mismo nombre o bajar en kayak por el río Grey son otro de los imperdibles.</p>
  </div>
</div>
    </div>
}