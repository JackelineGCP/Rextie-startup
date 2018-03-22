import React, { Component } from 'react';
import { render } from 'react-dom';
import HomeLayout from '../components/home-layout';
import OperationLayout from '../components/operation-layout'

class Home extends Component {
  render() {
    return(
      <HomeLayout />
    )
  }
}

export default Home