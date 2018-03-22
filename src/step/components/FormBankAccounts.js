import React from 'react'

const FormBankAcount = () => {
  return (
    <div id="FormBankAccounts" className="modal fade" role="dialog" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <h4>Datos Obligatorios</h4>
            <select type="text" name="type-account" className="form-control show-tick input-sm">
              <option name="ahorro" value="ahorro">Propia</option>
              <option name="corrient" value="corriente">De terceros</option>
            </select><br />
            <select type="text" name="type-account" className="form-control show-tick input-sm">
              <option name="ahorro" value="ahorro">Seleccione un banco</option>
              <option name="corrient" value="corriente" className='Interbank' >BCP</option>
            </select><br />
            <select className="form-control show-tick input-sm">
              <option value="">Seleccione tipo de cuenta</option>
              <option value="">Ahorros</option>
              <option value="">Corriente</option>
            </select><br />
            <select className="form-control show-tick input-sm">
              <option value="">Seleccione una moneda</option>
              <option value="">Dólares</option>
              <option value="">Soles</option>
            </select><br />
            <input type="text" className="form-control" id="input-text" placeholder="Ingrese nro de cuenta" /><br/>
            <h4>Datos opcionales</h4>
            <select type="text" name="type-account" className="form-control show-tick input-sm">
              <option name="ahorro" value="ahorro">Seleccione tipo de documento</option>
              <option name="corrient" value="corriente">DNI</option>
            </select><br />
            <input type="text" className="form-control" id="input-text" placeholder="Ingrese nro de documento" /><br />
            <input type="text" className="form-control" id="input-text" placeholder="¿Con qué nombre desear guardar?" /><br />
            <input type="text" className="form-control" id="input-text" placeholder="Correo electrónico" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success">Añadir</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormBankAcount