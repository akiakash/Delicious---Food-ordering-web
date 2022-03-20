import React from "react";
import ResponsiveAppBar from './components/NavBar'
import Cards from "./Home/Cards/Cards";
import Slider from "./Home/Slider/Slider"



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
       
        <Slider />
        <Cards />
        

    </div>
  );
}

export default App;
