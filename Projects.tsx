import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data= [
    {
        id:1,
        title:"Personal Information",
        desc: "my Name is ahmed ansari. I am a student of fsc part-II here is my simple portfolio",
        image: "/myphoto.png",
        tags: ["React, Node, CSS, Typescript"]

    }
]
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) =>(<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            image={el.image}
            tags={el.tags}  
            />)  )}
        </div>
    </div>
  )
}

export default Projects