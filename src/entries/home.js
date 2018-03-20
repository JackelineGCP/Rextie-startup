import React from 'react';  // Permite crear componentes
import ReactDom from 'react-dom'; // Permite renderizar elementos o componentes en el navegador
import Home from '../page/container/home'
/* 
const app = document.getElementById('app');
const holaMundo = <h1>Hola mundo</h1>;
 */
// ReactDOM.render(que voy a renderizar, donde lo haré);
ReactDom.render (<Home/>,document.getElementById('app'));
