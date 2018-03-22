import React from 'react'
import './bankAccount.css'
import FormBankAccount from '../components/FormBankAccounts'
import AllAccounts from '../../my-accounts/components/all-accounts'

const BankAccounts = () => {
  return (
    <div className='BankAccounts-container'>
      <div className='subtitle'>
        <h3>Cuentas bancarias</h3>
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#FormBankAccounts">Añadir</button>
      </div>
      <FormBankAccount />
      <AllAccounts />
    </div>
  )
}

export default BankAccounts