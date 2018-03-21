import React from 'react'
import './login-person.css'

import Login from './login'

import './login.css'
import { Input, Button, Card, CardBody, Fa } from 'mdbreact';

const LoginPerson = () => {
  return (
    <Login name={'persona'}>
      <Button icon="facebook" block className='facebook'>Inicia sesión con Facebook</Button>
      <Button block className='google'>Inicia sesión con Google</Button><br/>
    </Login>
  )
}

export default LoginPerson