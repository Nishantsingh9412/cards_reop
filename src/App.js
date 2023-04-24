import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const[courses,setCourses] = useState([])
  const[category,setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async() =>{
      try{
        const result = await fetch(apiUrl);
        const output = await result.json();
        // Save data into a variable
        console.log(output.data);
        setCourses(output.data);
      }catch(error){
        toast.error("API error")
      }
    }
    fetchData();
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div>
      <Navbar />
      </div>

        <div>
        <div>
          <Filter 
            category = {category}
            setCategory = {setCategory}
            filterData = {filterData}
          />
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
              <Cards 
                courses = {courses}
                category = {category} 
              /> 
          </div>
        </div>
    </div>
  );
};

export default App;
