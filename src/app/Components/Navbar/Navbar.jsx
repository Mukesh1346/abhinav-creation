'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

export default function Navbar() {
  const menuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  let hideTimeout = null;

  const product = [
    {  id: 1 ,   list: 'Bootcut Jeans', href:'#Product'},
    { id: 2 ,   list: 'Relaxed Fit Jeans', href:'#Testimonial'},
    { id: 3 ,   list: 'Distressed Ripped Jeans', href:'#LatestProduct'},
    { id: 4 ,   list: 'Straight Fit Jeans', href:'#Unique'},
    { id: 5 ,   list: 'Slevedge Denim Jeans', href:'#AppSection'},
    { id: 6 ,   list: 'Cargo Jeans', href:'#Product'},
    { id: 7 ,   list: 'Bootcut Jeans', href:'#Product'},
   
  ]


  useEffect(() => {
    setHasMounted(true);
    gsap.fromTo(
      '#main-logo',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.3 }
    );
  }, []);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    hideMenu();
  };

  if (!hasMounted) return null;

  return (
    <>
      {/* Top Navbar */}
      <div className="top-navbar d-none d-md-flex justify-content-start align-items-center px-4 py-2 glassmorph small">
        <div className="d-flex gap-4 align-items-center">
          <span><FaPhoneAlt className='fs-5' /> +91 9876543210</span>
          <span>< IoLogoYoutube className='fs-5 text-danger' /> hello@example.com</span>
          <Link href="#" className="insta-hover ">< FaInstagram className='fs-5 text-danger' /> Instagram</Link>
        </div>
      </div>

      {/* Logo */}
      <div className="mid-navbar text-center bg-white shadow-sm py-2">
        <Image id="main-logo" src="/logo.png" alt="Logo" className="logo-img" width={100} height={50} />
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm ">
        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto gap-lg-4 gap-2 text-center">
              {/* Static Links */}
              {product.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link href={item.href} className="nav-link nav-hover" onClick={handleLinkClick}>
                    {item.list}
                  </Link>
                </li>
              ))}

              {/* Dropdown */}
              {/* <li
                className="nav-item dropdown position-relative shop-dropdown"
                onMouseEnter={showMenu}
                onMouseLeave={hideMenu}
              >
                <Link className="nav-link nav-hover dropdown-toggle" href="#" role="button">
                  Shop
                </Link>

                <div ref={menuRef} className="dropdown-menu custom-dropdown fashion-dropdown p-4 shadow-lg">
                  <div className="row g-4">
                    <div className="col-6 col-md-3">
                      <h6 className="fw-bold mb-2">Men</h6>
                      <ul className="list-unstyled">
                        <li><Link href="/shop/men/tshirts" className="dropdown-link" onClick={handleLinkClick}>T-Shirts</Link></li>
                        <li><Link href="/shop/men/jeans" className="dropdown-link" onClick={handleLinkClick}>Jeans</Link></li>
                        <li><Link href="/shop/men/jackets" className="dropdown-link" onClick={handleLinkClick}>Jackets</Link></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <h6 className="fw-bold mb-2">Women</h6>
                      <ul className="list-unstyled">
                        <li><Link href="/shop/women/dresses" className="dropdown-link" onClick={handleLinkClick}>Dresses</Link></li>
                        <li><Link href="/shop/women/tops" className="dropdown-link" onClick={handleLinkClick}>Tops</Link></li>
                        <li><Link href="/shop/women/kurtis" className="dropdown-link" onClick={handleLinkClick}>Kurtis</Link></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <h6 className="fw-bold mb-2">Kids</h6>
                      <ul className="list-unstyled">
                        <li><Link href="/shop/kids/boys" className="dropdown-link" onClick={handleLinkClick}>Boys</Link></li>
                        <li><Link href="/shop/kids/girls" className="dropdown-link" onClick={handleLinkClick}>Girls</Link></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <h6 className="fw-bold mb-2">New & Sale</h6>
                      <ul className="list-unstyled">
                        <li><Link href="/shop/new" className="dropdown-link" onClick={handleLinkClick}>New Arrivals</Link></li>
                        <li><Link href="/shop/sale/50" className="dropdown-link" onClick={handleLinkClick}>Flat 50%</Link></li>
                        <li><Link href="/shop/sale/under-999" className="dropdown-link" onClick={handleLinkClick}>Under ₹999</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}

              {/* Contact */}
              <li className="nav-item">
                <Link href={`/Pages/About-us`} className="nav-link nav-hover" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
