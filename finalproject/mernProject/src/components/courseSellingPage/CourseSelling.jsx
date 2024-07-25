


// import React from 'react'
import { getApiCall } from "../../shared/api-client.js";
import CardSider from "../logo/CardSider";
// import {SellingLogo} from "../logo/SellingLogo";
import { Products } from "./Products"
import { useEffect, useState } from "react"
import Type from "./Type";

export const CourseSelling = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getCourses();
  }, [])

  const getCourses = async () => {
    try {
      const COURSES_ENDPOINT = 'http://localhost:5000/api/courses';
      const response = await fetch(COURSES_ENDPOINT);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const coursesData = await response.json();
      setLoading(false);
      setCourses(coursesData);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setErrors(err);
      setLoading(false);
    }
  };

  return (
    <div className='container-fluid'>
      <header className="text-center fs-1 fw-bold text-white"><Type/>Available Courses</header>

      <div className="content mb-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fs-1 fw-bold">DSA to Development:</h2>
            <p className="fs-2 fw-bold">A Complete Guide</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <img 
              src="https://media.geeksforgeeks.org/img-practice/prod/courses/1/Web/Other/DSA%20to%20Development%20%E2%80%93%207_1686564471.png" 
              alt="DSA to Development" 
              className="img-fluid"
              style={{ width:'800px', height:'300px' }}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-3' style={{ position: 'sticky', top: '20px', height: 'calc(100vh - 40px)' }}>
          <CardSider/>
        </div>

        
        <div className='col-9 text-center'>
  {loading ? (
    <p>Loading.....</p>
  ) : errors ? (
    <p>Error: {errors.message}</p>
  ) : (
    <Products data={courses} />
  )}  
</div>
      </div>
    </div>
  )
}

export default CourseSelling;