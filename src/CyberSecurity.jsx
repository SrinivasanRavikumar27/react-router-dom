import React from 'react';
import image1 from '/src/assets/cyber-security1.jpg';
import image2 from "/src/assets/cyber-security2.jpg";
import image3 from "/src/assets/cyber-security3.jpg";

function CyberSecurity() {

  const height = {
    height : '240px',
  }

  return (
    <div>
    <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

    <div className='card'>
    <img src={image1} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Cyber Security</h5>
            <p class="card-text">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src={image2} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Cyber Security</h5>
            <p class="card-text">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src={image3} className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Cyber Security</h5>
            <p class="card-text">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
          </div>
          </div>
  )
}

export default CyberSecurity