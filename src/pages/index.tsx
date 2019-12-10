import React, { ReactElement } from 'react'
import Header from '../components/header';
import Carousel from '../components/carousel';
const bandBg = require('../images/band-bg.jpg');

export default function Index(): ReactElement {
  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage:`url(${bandBg})`}}>
      <Header/>
      <div className="container mx-auto mt-10 w-3/4"><Carousel/></div>
    </div>
  )
}
