// components/Header.js
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
            <h1 className="bgText">
              FASHI<br />ONUP
              <br />TODATE
              <br />HERE
            </h1>
            <Image
              src="/dress.png"
              alt="Love Overlay"
              width={350}
              height={350}
              className="overlayImg"
            />
          </div>


          <div className="col-md-6">
            <div className='HeaderRightSec'>
              <h2 className="mb-3 HeaderMainTitle">Special </h2>
                <h2 className='HeaderMainSubtitle'>Brands Fashion</h2>
              <p>
                cloths connects hearts across world. Our platform nurtures meaningful
                relationships with compassion, trust, and respect at the core.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
