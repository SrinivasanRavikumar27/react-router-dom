import React from 'react'

function DataScience() {

  const height = {
    height : '240px',
  }

  return (
    <div>
    <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

    <div className='card'>
    <img src="/src/assets/data-science1.jpeg" className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Data Science</h5>
            <p class="card-text">Data science is a field of study that uses data for various research and reporting purposes to derive insights and meaning from that data.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="/src/assets/data-science2.jpeg" className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Data Science</h5>
            <p class="card-text">Data science is a field of study that uses data for various research and reporting purposes to derive insights and meaning from that data.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="/src/assets/data-science3.jpeg" className="card-img-top" style={height} alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Data Science</h5>
            <p class="card-text">Data science is a field of study that uses data for various research and reporting purposes to derive insights and meaning from that data.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
          </div>
          </div>
  )
}

export default DataScience