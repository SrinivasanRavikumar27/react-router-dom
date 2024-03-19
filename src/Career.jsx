import React from 'react';
import image1 from "/src/assets/Career-development.jpg";
import image2 from "/src/assets/placement-support.jpg";
import image3 from "/src/assets/guidance.jpg";

function Career() {

  const height = {
    height : '240px',
  }

  return (
    <div>
   <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

    <div className='card'>
    <img src={image1} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Career support</h5>
            <p class="card-text">Career support can include counseling, assessments, and guidance to help people make informed decisions and achieve professional success. It can also focus on career direction, aspirations, and exploring career options.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src={image2} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Placement Support</h5>
            <p class="card-text">Placement support is a service that helps students find suitable employment opportunities and prepare for job interviews. It's the final step in career development services before employment. 
</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src={image3} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Alumni Guidance</h5>
            <p class="card-text">Alumni guidance can refer to the role of alumni mentors in guiding students through professional and personal challenges. Alumni mentors can provide mentorship, internships, and career opportunities to students. They can also contribute scholarships to deserving students. 
</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
          </div>
          </div>
  )
}

export default Career