'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

export default function Navbar() {
  const menuRef = useRef(null);
  let hideTimeout = null;

  const showMenu = () => {
    clearTimeout(hideTimeout);
    if (menuRef.current) {
      menuRef.current.style.display = 'block';
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  const hideMenu = () => {
    hideTimeout = setTimeout(() => {
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            menuRef.current.style.display = 'none';
          },
        });
      }
    }, 200);
  };

  useEffect(() => {
    gsap.fromTo(
      '#main-logo',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.3 }
    );
  }, []);

  return (
    <>
      {/* Top Nav */}
      <div className="top-navbar d-flex justify-content-start align-items-center px-4 py-2 glassmorph small">
        <div className="d-flex gap-4 align-items-center">
          <span>📞 +91 9876543210</span>
          <span>✉️ hello@example.com</span>
          <Link href="#" className="insta-hover">📷 Instagram</Link>
        </div>
      </div>

      {/* Mid Nav */}
      <div className="mid-navbar text-center bg-white shadow-sm py-2">
        <Image id="main-logo" src="/logo.png" alt="Logo" className="logo-img" width={100} height={50} />
      </div>

      {/* Bottom Nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container justify-content-center">
          <ul className="navbar-nav gap-4">

            <li className="nav-item">
              <Link href="/" className="nav-link nav-hover">Saree</Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link nav-hover">Lehenga</Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link nav-hover">Suit</Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link nav-hover">Kurti</Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link nav-hover">Dupatta</Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link nav-hover">Petticoat</Link>
            </li>

            {/* Shop Dropdown */}
            <li
              className="nav-item dropdown position-relative shop-dropdown"
              onMouseEnter={showMenu}
              onMouseLeave={hideMenu}
            >
              <Link className="nav-link nav-hover dropdown-toggle" href="#" role="button">Shop</Link>

              <div ref={menuRef} className="dropdown-menu custom-dropdown fashion-dropdown p-4 shadow-lg">
                <div className="row g-4">
                  {/* Men */}
                  <div className="col-6 col-md-3">
                    <h6 className="fw-bold mb-2">Men</h6>
                    <ul className="list-unstyled">
                      <li><Link href="/Pages/Shop" className="dropdown-link">T-Shirts</Link></li>
                      <li><Link href="/shop/men/jeans" className="dropdown-link">Jeans</Link></li>
                      <li><Link href="/shop/men/jackets" className="dropdown-link">Jackets</Link></li>
                    </ul>
                  </div>

                  {/* Women */}
                  <div className="col-6 col-md-3">
                    <h6 className="fw-bold mb-2">Women</h6>
                    <ul className="list-unstyled">
                      <li><Link href="/shop/women/dresses" className="dropdown-link">Dresses</Link></li>
                      <li><Link href="/shop/women/tops" className="dropdown-link">Tops</Link></li>
                      <li><Link href="/shop/women/kurtis" className="dropdown-link">Kurtis</Link></li>
                    </ul>
                  </div>

                  {/* Kids */}
                  <div className="col-6 col-md-3">
                    <h6 className="fw-bold mb-2">Kids</h6>
                    <ul className="list-unstyled">
                      <li><Link href="/shop/kids/boys" className="dropdown-link">Boys</Link></li>
                      <li><Link href="/shop/kids/girls" className="dropdown-link">Girls</Link></li>
                    </ul>
                  </div>

                  {/* New & Sale */}
                  <div className="col-6 col-md-3">
                    <h6 className="fw-bold mb-2">New & Sale</h6>
                    <ul className="list-unstyled">
                      <li><Link href="/shop/new" className="dropdown-link">New Arrivals</Link></li>
                      <li><Link href="/shop/sale/50" className="dropdown-link">Flat 50%</Link></li>
                      <li><Link href="/shop/sale/under-999" className="dropdown-link">Under ₹999</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="nav-link nav-hover">Contact</Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}
