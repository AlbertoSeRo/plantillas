import React from 'react'
import Card from './Card'
import image1 from "../assts/1.jpg"
import image2 from "../assts/2.jpg"
import image3 from "../assts/3.jpg"

const Carss =[
  {
    id: 1,
    title:'Pelicula 1',
    image: image1,
    instructor:"Alberto"
  },
  {
    id: 2,
    title:'Pelicula 2',
    image: image2,
    instructor:"Alberto"

  },
  {
    id: 3,
    title:'Pelicula 3',
    image: image3,
    instructor:"Alberto"


  }

]



export default function Cars() {
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
              Carss.map(c=>(
                <div className="col-md-4" key={Cars.id}>
                  <Card
                  key={c.id}
                  id={c.id}
                  title={c.title}
                  image={c.image}
                  instructor={c.instructor}
                  />
                </div>
              ))
            }
            
            
           
        </div>
    </div>
    
  );
}
