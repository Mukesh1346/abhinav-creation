import React from 'react'
import './MainHero.css'; // Assuming you have a CSS file for styling the main hero section
import Image from 'next/image';
import main from '../../Images/main222.png'; // Adjust the path as necessary
import logo from '../../Images/Group.png'; // Adjust the path as necessary


export default function MainHero() {
  return (
    
    <>
    
    <div className="container-fluid mainhero">
      <div className="container">
        <div className="row  ">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-row justify-content-center align-items-end">
                <div className="col-lg-4 col-md-4 col-6 mb-5 pb-3 img1">
                  <h1 className='text-white fs-5' >Elevate Your Style with Our Premium Jeans</h1>
                  <p className='text-white'> perfect blend of comfort and fashion with our premium jeans. Crafted with care, our collection offers a range of styles to suit every occasion.</p>
                                  <button className="btn-custom">Explore more</button>
                </div>
                <div className="col-lg-4 col-md-4 col-6 img" >
                  <Image src={main} width={500} alt='men' />
                </div>
                <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-end">
                  <Image src={logo} className='img-fluid' alt='logo' /> 
                 </div>

            </div>
        </div>
        </div>
    </div>
    </>
  )
}
