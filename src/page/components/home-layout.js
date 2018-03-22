import React from 'react';
import Header from '../../header/components/header';
import Banners from '../../banners/components/banners';
import Footer from '../../footer/components/footer'
import DatosdeCuenta from '../../datosdecuenta/components/datosdecuenta';


const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Banners />
      <Footer />
      <DatosdeCuenta />
    </div>
  )
}

export default HomeLayout