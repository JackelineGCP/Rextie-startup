import React from 'react'
import './accounts.css'

const MyAccounts = (props) => {
  const {
    title
  } = props

  return (
    <div className="panel panel-default">
      <h3 className='title'>{title}</h3>
      <table className="table table-hover table-bordered">
        <thead>
          <tr className="active">
            <th>Banco</th>
            <th>Tipo de cuenta</th>
            <th>Nro de cuenta</th>
            <th>Moneda</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BCP</td>
            <td>Ahorro</td>
            <td>1515151515</td>
            <td>USD</td>
            <td><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MyAccounts