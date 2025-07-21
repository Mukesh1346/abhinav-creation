'use client';
import React from 'react';
import Image from 'next/image';
import './Header.css';

export default function Header() {
  return (
    <div className="Header-main py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Text with image overlaid */}
          <div className="col-md-6 position-relative text-center">
            <h1 className="bgText fadeInText">
              FASHI<br />ONUP
              <br />TODATE
              <br />HERE
            </h1>
            <Image
              src="/dress.png"
              alt="Overlay Dress"
              width={350}
              height={350}
              className="overlayImg smoothDropIn"
            />
          </div>

          <div className="col-md-6">
            <div className="HeaderRightSec">
              <h2 className="mb-3 HeaderMainTitle">Special</h2>
              <h2 className="HeaderMainSubtitle">Brands Fashion</h2>
              <section>
             
                    <p>
                      Cloths connect hearts across the world. Our platform nurtures meaningful
                      relationships with compassion, trust, and respect at the core.  Cloths connect hearts across the world. Our platform nurtures meaningful
                      relationships with compassion, trust, and respect at the core.
                    </p>
                 
              </section>
              <div className="d-flex">
                <input type="text" className="form-control w-25" placeholder="Write something..." />
                <button className="btn btn-warning ms-3">Order Now</button>
              </div>

              <div className="mt-4">
                <b>www.anibhavicreations.com</b>
                <div className="mt-2">
                  <Image src="/instagram.png" className="me-2" alt="insta" width={30} height={30} />
                  <Image src="/twitter.png" className="me-2" alt="twitter" width={30} height={30} />
                  <Image src="/youtube.png" className="me-2" alt="insta" width={30} height={30} />
                  <Image src="/logo.png" className="me-2" alt="insta" width={40} height={30} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
