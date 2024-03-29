import React from 'react';
import image1 from "/src/assets/front-end-development.jpg";
import image2 from "/src/assets/backend-development.png";
import image3 from "/src/assets/database.png";

function FullStackDeveloper() {

  const height = {
    height : '240px',
  }

  return (
    <div>
    <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

    <div className='card'>
    <img src={image1} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Front End Development</h5>
            <p class="card-text">Front-end development aims to meet user requirements and deliver a positive user experience.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src={image2} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Back End Development</h5>
            <p class="card-text">Back-end development means working on server-side software, which focuses on everything you can't see on a website. </p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src={image3} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Database Management</h5>
            <p class="card-text">Database management is the process of organizing and storing data in a structured way. A database management system (DBMS) is a software tool that helps users create, modify, and query a database.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
          </div>
          </div>
  )
}

export default FullStackDeveloper