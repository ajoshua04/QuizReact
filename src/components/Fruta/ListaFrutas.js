import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import Form from "../Form/Form";
import Fruta from "../Fruta/Fruta";

class ListaFrutas extends React.Component {

  
  state = {
    frutas :[]
  }

   addFruta = (fruta) => {
   
      fruta.id = fruta.id;
      fruta.cantidad = 0;
      fruta.precio = fruta.precio;
      const updatedFrutas = [...this.state.frutas,fruta];
      this.setState({frutas:updatedFrutas});
      
  };

 total = (parametro)  => {
  var  updatedFrutas = [];
  this.state.frutas.forEach(fruta => {
    if(fruta.id==parametro.id){
      fruta.cantidad=parametro.cantidad
    }
    updatedFrutas = [...updatedFrutas,fruta];
  });
  this.setState({frutas:updatedFrutas});

  var totalPrecio = 0;

  this.state.frutas.forEach(fruta => {
    totalPrecio = totalPrecio + (fruta.cantidad * fruta.precio)
  });

  this.props.bus({
    total: totalPrecio
})
}

 


 render(){
   return (
    <>
      <Form onSubmit={this.addFruta} />
      <div className="lstFrutacontainer">
        {this.state.frutas.map((fruta) => (
          <Fruta
            name={fruta.id}
            price={fruta.precio}
            bus = {this.total}
          />
        ))}
      </div>
    </>
  );
 }
  
}

export default ListaFrutas;
