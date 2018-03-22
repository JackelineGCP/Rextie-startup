import React from 'react';

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#" className="logo-inline">
          <img src="logo-rextie.png" alt="logo-rextie" />
        </a>
        <ul className="nav navbar-nav navbar-right">
          <li><a className="navbar-brand" href="#">Persona</a></li>
          <li><a className="navbar-brand" href="#">Empresa</a></li>
        </ul>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Noticia</a></li>
          <li><a href="#">Ayuda</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Inicia sesión<span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header;
