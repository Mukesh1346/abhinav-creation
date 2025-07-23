'use client'
import React, { useState, useEffect } from 'react';
import './explore.css';
import Image from 'next/image';
import img1 from '../../Images/BlackJenas1.png';
import img2 from '../../Images/MEansJeans1.png';
import CounterBox from './CountBox';

export default function Explore({count1=100,count2=200,duration=2000}) {
     const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
        useEffect(() => {
    let start1 = 0;
    let start2 = 0;
    const stepTime1 = Math.floor(duration / count1);
    const stepTime2 = Math.floor(duration / count2);

    const timer1 = setInterval(() => {
      start1 += 1;
      setNum1(start1);
      if (start1 >= count1) clearInterval(timer1);
    }, stepTime1);

    const timer2 = setInterval(() => {
      start2 += 1;
      setNum2(start2);
      if (start2 >= count2) clearInterval(timer2);
    }, stepTime2);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [count1, count2, duration]);

    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <h1 className="mb-2 ExploreSec" style={{ color: "#188fc7" }}>EXPLORE OUR PRODUCTS</h1>
                    <p>
                        At Anibhavi Creations, we pride ourselves on offering a wide range of high-quality, stylish jeans at wholesale prices across Pan India. Whether you're a retailer, distributor, or fashion enthusiast, our diverse collection ensures you'll find the perfect fit for every customer. <br />
                        Located at Satyosham Garments, 9/7308 Guru Govind Singh Gali (Gandhinagar), near Surya Guest House, Anibhavi Creations brings you a wide range of wholesale jeans that are perfect for every fashion retailer across Pan India. Our collection is crafted with precision and care to meet the diverse needs of your customers.<br />

                        We understand that every customer deserves the best in both style and comfort. That’s why we offer premium wholesale jeans crafted with high-quality materials and expert craftsmanship. Whether you're shopping for your retail store or adding to your personal collection, our jeans deliver unmatched style, durability, and comfort. </p>
                    <button className="btn-custom discoverbtn mt-2">Discover More</button>
                </div>

                {/* <div className="col-lg-6 col-md-6 col-12">
                    <div className="row gap-2">
                       
                        <div className="col-6" style={{ backgroundColor: '#188fc7',
                                                        color: 'white',
                                                        height: '250px',
                                                        width:'45%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        fontSize: '1.5rem', }}>
                        <div>Count 1: {num1}</div>                        
                        </div>
                        <div className="col-6" style={{ position: 'relative', height: '250px' }}>
                            <Image src={img1} alt="Product 1" fill style={{ objectFit: 'cover' }} />
                        </div>

                        
                        <div className="col-6" style={{ position: 'relative', height: '250px' }}>
                            <Image src={img2} alt="Product 2" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="col-6" style={{ backgroundColor: '#188fc7',
                                                        color: 'white',
                                                        height: '250px',
                                                        width:'45%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        fontSize: '1.5rem', }}>
                            <div>Count 2: {num2}</div>
                        </div>
                    </div>
                </div> */}

                <div className="col-lg-6 col-md-6 col-12 mt-5">
          <div className="row g-2">
            {/* First Row */}
            <div className="col-6">
                {/* <p className="text-white fs-4">Our Reviews</p> */}
             <CounterBox title="New Clients" count={200} duration={2500} />

            </div>
            <div className="col-6" style={{ position: 'relative', height: '250px' }}>
              <Image src={img1} alt="Product 1" fill style={{ objectFit: 'cover' }} />
            </div>

            {/* Second Row */}
            <div className="col-6" style={{ position: 'relative', height: '250px' }}>
              <Image src={img2} alt="Product 2" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="col-6">
             <CounterBox title="Our Reviews" count={500} duration={4000} />
            </div>
          </div>
        </div>
      </div>

            </div>
       
    )
}
