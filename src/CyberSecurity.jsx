import React from 'react'

function CyberSecurity() {

  const height = {
    height : '240px',
  }

  return (
    <div>
    <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

    <div className='card'>
    <img src="/src/assets/cyber-security1.jpg" className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Cyber Security</h5>
            <p class="card-text">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="/src/assets/cyber-security2.jpg" className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Cyber Security</h5>
            <p class="card-text">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="/src/assets/cyber-security3.jpg" className="card-img-top" style={height} alt="..."/>
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