'use client'; // Add this if you're using Next.js 13+ with the App Router and need interactivity

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="container-fluid my-5">
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Column 2 */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><Link href="#" className="text-white">MDBootstrap</Link></p>
                <p><Link href="#" className="text-white">MDWordPress</Link></p>
                <p><Link href="#" className="text-white">BrandFlow</Link></p>
                <p><Link href="#" className="text-white">Bootstrap Angular</Link></p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Column 3 */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope me-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>

              {/* Column 4 */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                {/* Social icons */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#" role="button">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#" role="button">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#" role="button">
                  <i className="fab fa-google"></i>
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#" role="button">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#" role="button">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#" role="button">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <Link href="https://mdbootstrap.com/" className="text-white ms-1">MDBootstrap.com</Link>
        </div>
      </footer>
    </div>
  );
}
