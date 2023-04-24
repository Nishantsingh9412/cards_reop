import React, { useEffect, useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let category = props.category;

    const [likedCourses,SetlikedCourses] = useState([]);
    const getCourses = () => {
        if(category === "All"){
            let allCourses = [];
            Object.values(props.courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
             })
        })
        return allCourses;
        }else{
            // main sirf specific category ka data array krunga 
            return props.courses[category];
        }
    }
return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        { getCourses().map((course) => {
              return ( <Card key={course.id}
                    course = {course}
                    likedCourses = {likedCourses} 
                    SetlikedCourses = {SetlikedCourses}
                />
                );
            })
        }
    </div>
  )
}

export default Cards;
