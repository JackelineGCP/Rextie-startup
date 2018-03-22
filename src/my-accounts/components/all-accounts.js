import React from 'react'
import MyAccounts from '../../my-accounts/components/my-accounts'
import OthersAccounts from '../../my-accounts/components/others-account'

const AllAccounts = () => {
  return(
    <div>
      <MyAccounts />
      <OthersAccounts />
    </div>
  )
}

export default AllAccounts