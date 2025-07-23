'use client';
import React, { useEffect, useRef, useState } from 'react';
import './LatestProducts.css';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Running shoes for men', price: 99, img: '/banner.jpg' },
  { id: 2, name: 'Running shoes for men', price: 99, img: '/banner8.jpg' },
  { id: 3, name: 'Running shoes for men', price: 99, img: '/banner9.jpg' },
  { id: 4, name: 'Running shoes for men', price: 99, img: '/banner.jpg' },
  { id: 5, name: 'Running shoes for men', price: 99, img: '/banner8.jpg' },
  { id: 6, name: 'Running shoes for men', price: 99, img: '/banner.jpg' },
  { id: 7, name: 'Running shoes for men', price: 99, img: '/banner9.jpg' },
  { id: 8, name: 'Running shoes for men', price: 99, img: '/banner.jpg' },
];


const dummyProducts = [
  {
    id: 0,
    title: 'Classic T-Shirt',
    description: 'High-quality cotton T-shirt with modern fit.',
    price: 1029,
    image: '/j1.jpg',
  },
  {
    id: 1,
    title: 'Summer Shirt',
    description: 'Light and breezy for summer days.',
    price: 945,
    image: '/j2.jpg',
  },
  {
    id: 2,
    title: 'Denim Jacket',
    description: 'Stylish and warm, perfect for any weather.',
    price: 1289,
    image: '/j4.jpg',
  },
  {
    id: 3,
    title: 'Hoodie',
    description: 'Comfortable hoodie for casual wear.',
    price: 1100,
    image: '/j5.jpg',
  },
  {
    id: 4,
    title: 'Bomber Jacket',
    description: 'Trendy bomber jacket for all seasons.',
    price: 1499,
    image: '/j6.jpg',
  },
  {
    id: 5,
    title: 'Classic T-Shirt',
    description: 'High-quality cotton T-shirt with modern fit.',
    price: 1029,
    image: '/j1.jpg',
  },
  {
    id: 6,
    title: 'Summer Shirt',
    description: 'Light and breezy for summer days.',
    price: 945,
    image: '/j2.jpg',
  },
  {
    id: 7,
    title: 'Denim Jacket',
    description: 'Stylish and warm, perfect for any weather.',
    price: 1289,
    image: '/j4.jpg',
  },
  {
    id: 8,
    title: 'Hoodie',
    description: 'Comfortable hoodie for casual wear.',
    price: 1100,
    image: '/j5.jpg',
  },
  {
    id: 9,
    title: 'Bomber Jacket',
    description: 'Trendy bomber jacket for all seasons.',
    price: 1499,
    image: '/j6.jpg',
  },
  {
    id: 10,
    title: 'Bomber Jacket',
    description: 'Trendy bomber jacket for all seasons.',
    price: 1499,
    image: '/j6.jpg',
  },
  {
    id: 11,
    title: 'Denim Jacket',
    description: 'Stylish and warm, perfect for any weather.',
    price: 1289,
    image: '/j4.jpg',
  },
];





export default function LatestProducts() {
  const CARD_WIDTH = 250 + 30; // 250px width + 30px gap
  const VISIBLE_CARDS = 5;
  const [offset, setOffset] = useState(0);

  const totalCards = products.length;
  const duplicatedProducts = [...products, ...products]; // for smooth loop

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const maxOffset = CARD_WIDTH * (totalCards);
        const nextOffset = prevOffset + CARD_WIDTH;
        return nextOffset >= maxOffset ? 0 : nextOffset;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="latest-products-container">
      <div className="header">
       <div className='text-center'> 
       <h2 >LATEST PRODUCTS</h2>
       </div>
        <a href="#">VIEW ALL</a>
      </div>
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {dummyProducts.map((product, idx) => (
           <div key={idx}>
            <Link className='titleLatest'  href={`/Pages/product-details/${idx}`}>
            <div className="product-card" key={idx}>
              <Image src={product.image} alt={product.title} width={250} height={250} />
              <div className="product-info align-items-center justify-content-center d-grid">
                <span >{product.title}</span>
                <span > Price : {product.price}</span>
                {/* <strong>${product.description}</strong> */}
              </div>
              <button className="cartbtn">Add to Cart</button>
            </div>
          </Link>  
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
