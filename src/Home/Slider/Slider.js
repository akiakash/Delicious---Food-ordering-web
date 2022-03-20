import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import  {SliderImages} from './SliderImages';
import './Sliders.css';


// import image from 'images/pubg.jpg';


function Slider() {
  return (
    <Carousel className='sliders' >
      {SliderImages.map((item)=>(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{item.description}</h3>
          <p>{item.alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
    

      )
      )}
  
   
</Carousel>
  )
}

export default Slider;

