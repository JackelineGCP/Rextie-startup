import React from 'react'
import './login.css'
import { Input, Button, Card, CardBody, Fa } from 'mdbreact';

const Login = (props) => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-5 Login d-flex align-items-center">
        <div className='Card-with'>
          <Card>
            <CardBody>
              <form className='mt-4'>
                <h3 className="mb-5">Inicia sesión como {props.name}</h3>
                {props.children}
                <Input label="E-mail" icon="envelope grey-text" group type="email" validate error="wrong" success="right" />
                <Input label="Contraseña" icon="lock grey-text" group type="email" validate error="wrong" success="right" />
                <div className="text-center">
                  <a href="">¿Olvidó su contraseña?</a><br />
                  <p className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
                  </p>
                  <Button>Iniciar sesión</Button><br/>
                </div>
              </form>
            </CardBody>
          </Card>
          <br />
          <div className="text-center">
            <p>¿No tienes cuenta aún?</p>
            <Button>Regístrate como {props.name}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login