import React from 'react'
import './sidebar.css'

const SideBar = () => {
  return (
    <div className="msb" id="msb">
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <div className="brand-wrapper">
            <div className="brand-name-wrapper">
              <a className="navbar-brand" href="#">
                Rextie
              </a>
            </div>
          </div>
        </div>
        <div className="side-menu-container">
          <ul className="nav navbar-nav">
            <li className='button-primary'><a href="#"><i className="glyphicon glyphicon-random
"></i> Nueva operación</a></li>
            <li className="active"><a href="#"><i className="glyphicon glyphicon-signal"></i> Principal</a></li>
            <li className="panel panel-default" id="dropdown">
              <a data-toggle="collapse" href="#dropdown-lvl1">
                <i className="fa fa-id-card"></i>Cuentas bancarias
                <span className="caret"></span>
              </a>
              <div id="dropdown-lvl1" className="panel-collapse collapse">
                <div className="panel-body">
                  <ul className="nav navbar-nav">
                    <li><a href="#">Cuentas bancarias personales</a></li>
                    <li><a href="#">Cuentas bancarias de destino</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><a href="#"><span className="fa fa-history"></span>Historial de operaciones</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SideBar