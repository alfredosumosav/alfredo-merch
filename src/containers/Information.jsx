import React from 'react';
import "../styles/components/Information.css";

const Information = () =>
<div className="Information">
  <div className="Information-content">
    <div className="Information-head">
      <h2>Informacion de contacto:</h2>
    </div>
    <div className="Information-form">
      <form action="">
        <input type="text" placeholder="Nombre Completo" name="name" />
        <input type="text" placeholder="Correo Electronico" name="email" />
        <input type="text" placeholder="Direccion" name="address" />
        <input type="text" placeholder="Apto. / Unidad / Suite (Opcional)" name="address2" />
        <input type="text" placeholder="Ciudad" name="city" />
        <input type="text" placeholder="Pais" name="country" />
        <input type="text" placeholder="Departamento" name="state" />
        <input type="text" placeholder="Codigo Postal" name="cp" />
        <input type="text" placeholder="Telefono" name="phone" />
      </form>
    </div>
    <div className="Information-buttons">
      <div className="Information-back">
        Regresar
      </div>
      <div className="Information-next">
        Pagar
      </div>
    </div>
  </div>
  <div className="Information-sidebar">
    <h3>Pedido:</h3>
    <div className="Information-item">
      <div className="Information-element">
        <h4>ITEM Name</h4>
        <span>$10</span>
      </div>
    </div>
  </div>
</div>;

export default Information;
