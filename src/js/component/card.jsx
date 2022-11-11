import React from "react";


const Card= (props)=> {
    return <div class="card" style={{"width": "18rem"}}>
    <img src={props.img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.titulo}</h5>
      <p class="card-text">{props.descripcion}</p>
      <a href="#" class="btn bg-success bg-opacity-75 justify-center">ver más</a>
    </div>
  </div>

}

export default Card;