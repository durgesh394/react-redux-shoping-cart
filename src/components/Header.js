import React from 'react'
import banner from "./banner.jpg";
import banner1 from "./banner1.jpg";
import banner2 from "./banner2.jpg";
const Header = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner1} className="d-block w-100 slide3rdimg" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Header
