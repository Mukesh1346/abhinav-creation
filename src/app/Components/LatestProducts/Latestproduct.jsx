'use client';
import React, { useEffect, useRef, useState } from 'react';
import './LatestProducts.css';
import Image from 'next/image';

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
          {duplicatedProducts.map((product, idx) => (
            <div className="product-card" key={idx}>
              <Image src={product.img} alt={product.name} width={250} height={250} />
              <div className="product-info">
                <span>{product.name}</span>
                <strong>${product.price}</strong>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
