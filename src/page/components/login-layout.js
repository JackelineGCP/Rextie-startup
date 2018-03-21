import React from 'react'
import './login.css'

import LoginCompany from '../../login/components/login-company'
import LoginPerson from '../../login/components/login-person'

const LoginLayout = () => {
  return (
    <div className='container'>
      <LoginCompany />
    </div>
  )
}

export default LoginLayout