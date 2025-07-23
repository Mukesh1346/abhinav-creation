'use client';

import React, { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
import axios from 'axios'
import Image from 'next/image';
import './ProductDetail.css';

export default function ProductDetailPage() {
  // const { id } = useParams(); 
  let [ProductDetail, setProductDetail] = useState([]);

  // function showProductData() {
  //   axios.get("https://api.escuelajs.co/api/v1/products")
  //     .then(res => {
  //       console.log(res.data)
  //       setProductDetail(res.data)
  //     })
  //     .catch(err => {
  //       console.log("Error Fetching Products : ", err);
  //     })
  // }
  useEffect(() => {
    showProductData()
  }, [])

  return (
    <>
      <div className='container'>
        <div className="product-page">
          <div className="product-main">
            <div className="product-image">
              <div className="discount-badge">30%</div>
              <Image src="/p10.jpg"  className="mainProductImage" width={400} height={300} alt="Sneaker" />
              <div className="product-carousel">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="other-variations">
                <Image src="/j1.jpg" width={60} height={40} alt="Variation 1" />
                <Image src="/j2.jpg" width={60} height={40} alt="Variation 2" />
                <Image src="/j3.jpg" width={60} height={40} alt="Variation 3" />
              </div>
            </div>

            <div className="product-details">
              <div className="breadcrumb">MEN / LIFESTYLE / SNEAKER / LOW TOP</div>
              <div className="product-code">PRODUCT CODE : 12678ASFG</div>
              <h1 className="product-title">CANVAS SNEAKER - BLACK</h1>
              <div className="product-price">
                <span className="price-new">$65</span>
                <span className="price-old">$70</span>
                <span className="rating">★ ★ ★ ★ ★ <small>(17 reviews)</small></span>
              </div>
              <p className="product-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
              <div className="size-select">
                <select>
                  <option>UK</option>
                </select>
                <select>
                  <option>SIZE</option>
                </select>
                <button className="size-guide">Size Guide</button>
              </div>
              <div className="actions">
                <button className="add-to-cart">ADD TO CART</button>
                <button className="add-to-wishlist " disabled>ADD TO WISHLIST</button>
              </div>
              <div className="delivery-estimate">
                <strong>DELIVERY ESTIMATE</strong><br />
                <small>Read our Terms and Conditions</small>
              </div>
            </div>
          </div>

          <div className="product-tabs">
            <div className="tabs">
              <button className="tab active">DETAIL</button>
              <button className="tab">SIZE DETAIL</button>
              <button className="tab">RETURN POLICY</button>
              <button className="tab">DELIVERY INFO</button>
            </div>
            <div className="tab-content">
              <div className="product-info">
                <div><strong>SKU</strong>: ASDK124535780XZ</div>
                <div><strong>Upper Material</strong>: Leather</div>
                <div><strong>Inner Material</strong>: Leather</div>
                <div><strong>Sole Material</strong>: Synthetic</div>
                <div><strong>Inner Sole Material</strong>: Synthetic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
