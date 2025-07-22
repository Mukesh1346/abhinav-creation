import React from 'react';
import Image from 'next/image';
import laptop from '../../Images/video-sec.jpg';
import play1 from '../../Images/appstore.png';
import play2 from '../../Images/googleplay.png';
import '../Explore/explore.css';


export default function AppSection() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-12 mt-5">
          <Image src={laptop} alt="App Image" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-12 mt-5">
          <h1 className="pb-2 " style={{ color: "#188fc7" }}>Experience Our App — Your Companion on the Go</h1>
          <p className='w-75'>
            Stay connected anytime, anywhere with our mobile app. Enjoy seamless browsing, exclusive features, and instant updates — all at your fingertips. Download now and take your experience to the next level.
          </p>
          <div className="d-flex gap-3 mt-4 d-flex flex-wrap">
                          <Image src={play1} alt="playstore Image" width={200}  />
                          <Image src={play2} alt="app Image"  width={200}/>

          </div>
           <button className="btn-custom mt-5 ">Download now</button>
        </div>
      </div>
    </div>
  );
}
