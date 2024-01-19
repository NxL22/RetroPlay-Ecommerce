import React from 'react'
import CarouselSlider from '../carousel/Carousel'
import './inicio.scss'
import { Productos } from '../productos/Productos'


export const Inicio = () => {

  const carouselImages = {
    img1: "../../assets/xbox.jpg",
    img2: "../../assets/switch.jpg"
  }

  return (  
    <>
      <CarouselSlider img1={carouselImages.img1} img2={carouselImages.img2}/>
      <Productos />
    </>
  )
}
