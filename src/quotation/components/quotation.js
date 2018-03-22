import React from 'react';

const Quotation = () => {
  return (
    <div className="row">
      <div className="col-sm-3 col-md-4 card col-md-offset-7 text-center">
        <div className="thumbnail">
          <h4>
            Cabio de Dólares online <br />
            Seguro, rápido y al mejor precio
          </h4>
          <div classNameName="caption">
            <h2>¿Qué quieres hacer?</h2>
            <p>Tipo de cambio: compra:3.25 - venta:3.28 </p>
            <div class="btn-group  btn-group-lg" role="group" aria-label="...">
              <button type="button" class="btn btn-primary">Quiero vender</button>
              <button type="button" class="btn btn-default">Quiero comprar</button>
            </div>
            <div className="buy">
              <p>¿Cuánto?:</p>
              <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-primary">$</button>
                <button type="button" class="btn btn-default">100</button>
              </div>
            </div>
            <div className='pay'>
            <p>Pagaras: S/.327.85</p>
            </div>
            <p>Ahorra S/. 55.00 respecto al banco</p>
            <button disabled="disabled">Realizar operación</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Quotation