import React from 'react';
import Header from '../header/components/header';
import Banners from '../banners/components/banners';
import Footer from '../footer/components/footer'


const HomeLayout = () => {
  return (
    <div>
     <Header />
     <Banners />
     <Footer />
    </div>
  )
}

export default HomeLayout