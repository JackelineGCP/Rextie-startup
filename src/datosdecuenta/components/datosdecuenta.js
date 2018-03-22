import React from 'react';

const DatosdeCuenta = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="text-center">
              <h3>Datos de mi cuenta</h3>
              Gessenia, el monto que recibiras es S/. 327.85
              <p>Tipo de cambio:  3.274</p>
            </div>
            <div className="text-button" >
              <p>Añadir otra cuenta bancaria</p>
              <button type="button" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i>
              </button>
            </div>
            <br />
            <div>
              <h5>¿Desque que banco nos transfiere?</h5>
              <select class="minimal">
                <option>Seleccione cuenta de origen</option>
                <option>Interbanck ahorros USD 14543245678</option>
                <option>BCP ahorros USD 112456896789</option>
                <option>BBVA Continental ahorros USD 10256896789</option>
                <option>scotiabank ahorros USD 112456896789</option>
              </select>
            </div>
            <br />
            <div>
              <h5>Seleccione el banco destino</h5>
              <select class="minimal">
                <option>Seleccione cuenta de destino</option>
                <option>Interbanck ahorros USD 14543245678</option>
                <option>BCP ahorros USD 112456896789</option>
                <option>BBVA Continental ahorros USD 10256896789</option>
                <option>scotiabank ahorros USD 112456896789</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DatosdeCuenta