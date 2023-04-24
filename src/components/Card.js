import React, { useState } from 'react'
import { FcLike ,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
  const [LikeorUnliked,setLikedorUnliked] = useState(false)
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.SetlikedCourses;
  function clickHandler(){
    // Logic   
    if(likedCourses.includes(props.course.id)){
      setLikedorUnliked(false);
       
      // pehle se liked hua pda tha 
       setLikedCourses((prev) => prev.filter((cid) => (cid !== props.course.id)));
       toast.warning("Like Removed");
    }else{
      setLikedorUnliked(true);
      // pehle se like nai hai ye course 
      // Insert krna hai ye liked Courses k andar

      if(props.likedCourses.length === 0){
        setLikedCourses([props.course.id])
      }else{
        // non empty pehle se   
        setLikedCourses((prev) => [...prev,props.course.id]);
      }  
      toast.success("Liked Successfully");
      }
   }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <div>
              <img src={props.course.image.url} />
            </div>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3
            grid place-items-center'>
                <button onClick={clickHandler}>
                  {/* on Unlike */}
                  {LikeorUnliked ?  <FcLike fontSize = "1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />  }
                
                  {/* On Like */}
                 

                </button>    
            </div>
        </div>
        
        <div className='p-4'>
          <p className='text—white font-semibold text-lg leading-6'>{props.course.title}</p>
          <p className='mt-2 text-white'>
             {
             props.course.description.length > 100 ? 
             (props.course.description.substr(0,100)) + "..." : 
             (props.course.description) + "..."
              }
          </p>
        </div>
    </div>
  )
}

export default Card
