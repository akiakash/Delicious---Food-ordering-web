import React from 'react'
import ResponsiveAppBar from '../components/NavBar';
import Cards from "./Cards/Cards";
import Slider from "./Slider/Slider";

function Home() {
  return (
      <>
    <ResponsiveAppBar />
    <Slider />
    <Cards />
    </>
  )
}

export default Home