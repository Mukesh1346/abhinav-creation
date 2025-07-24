'use client'; // Add this if you're using Next.js 13+ with the App Router and need interactivity

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import insta from '../../Images/instagram.png';
import facebook from '../../Images/facebook.png';
import twitter from '../../Images/twitter.png';
import youtube from '../../Images/youtube.png';
import './footer.css'; // Assuming you have a CSS file for styling the footer


export default function Footer() {
  return (
    <div className="container-fluid p-0">
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" 
      // style={{ backgroundColor: '#2a2a2a' }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold roboto-text fs-5">ANIBHAVI CREATIONS</h6>
                <p>
                  We are a leading garment company offering a wide range of women’s fashion — from sarees and kurtas to stylish ethnic wear. Our focus is on quality, trendy designs, and delivering elegant outfits that suit every occasion.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Column 2 */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase text-decoration-none mb-4 font-weight-bold roboto-text fs-5">Products</h6>
                <p><Link href="#" className="text-white">Saree</Link></p>
                <p><Link href="#" className="text-white">Lehenga</Link></p>
                <p><Link href="#" className="text-white">Suit</Link></p>
                <p><Link href="#" className="text-white">Kurti</Link></p>
                <p><Link href="#" className="text-white">Dupatta</Link></p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Column 3 */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold roboto-text fs-5">Contact</h6>
                <p><i className="fas fa-home me-3"></i>Shop Number 6429a, Near Nehru Gali, Main Road, Gandhi Nagar Bazar-110031</p>
                <p><i className="fas fa-envelope me-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone me-3"></i> 09899191517</p>
                <p><i className="fas fa-print me-3"></i> 011-22074991</p>
              </div>

              {/* Column 4 */}
              <div className="col-md-3 col-lg-2 col-xl-2  d-grid align-items-center justify-content-center mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold roboto-text fs-5">Follow us</h6>

                {/* Social icons */}
                <a className="btn btn btn-floating m-1" href="https://www.facebook.com/AnibhaviCreations#" role="button">
                  <Image 
                    src={facebook}  
                    alt="My Photo"
                    width={27}
                    
                  />
                </a>
                <a className="btn btn btn-floating m-1"  href="#" role="button">
                  <Image 
                    src={twitter}  
                    alt="My Photo"
                    width={27}
                    
                  />
                </a>
                <a className="btn btn btn-floating m-1"  href="#" role="button">
                   <Image 
                    src={youtube}  
                    alt="My Photo"
                    width={27}
                    
                  />
                </a>
                <a className="btn btn btn-floating m-1" href="#" role="button">
                  {/* <i className="fab fa-instagram"></i> */}
                   <Image 
                    src={insta}  
                    alt="My Photo"
                    width={27}
                    
                  />
                </a>
               
               
              </div>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="text-center p-3"
        //  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          {/* © 2020 Copyright: */}
          {/* <Link href="https://mdbootstrap.com/" className="text-white ms-1">MDBootstrap.com</Link> */}
        </div>
      </footer>
    </div>
  );
}
