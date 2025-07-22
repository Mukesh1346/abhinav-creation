'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import '../../../Components/Product/ProductDetail.css';

const page = () => {
    const { id } = useParams(); 
    let [ProductDetail, setProductDetail] = useState([]);
    let [isLoading, setIsLoading] = useState(true);


    function showProductData() {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
          .then(res => {
            setProductDetail(res.data);
            setIsLoading(false);
          })
          .catch(err => {
            console.log("Error Fetching Products:", err);
            setIsLoading(false);
          });
      }

    useEffect(() => {
        showProductData()
    }, [id])

    return (
        <>
            <div className='container'>
                <div className="product-page">
                    <div className="product-main">
                        <div className="product-image">
                            <div className="discount-badge">30%</div>
                            {ProductDetail.images && (
  <Image src={ProductDetail.images[0]} width={400} height={300} alt={ProductDetail.title} />
)}

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
                            {/* <div className="breadcrumb">MEN / LIFESTYLE / SNEAKER / LOW TOP</div> */}
                            {/* <div className="product-code">PRODUCT CODE : 12678ASFG</div> */}
                            <h1 className="product-title">{ProductDetail.title}</h1>
                            <span className="price-new ">Price  :    ${ProductDetail.price}</span> <br/>
                            <select className='form-control mt-3 w-25'>
                                <option value="1">Available Sizes :</option>
                                <option value="2">Size 26</option>
                                <option value="3">Size 36</option>
                                <option value="4">Size 28</option>
                                <option value="5">Size 34</option>
                            </select>
                            <p className="product-desc">{ProductDetail.description}</p>
                            {/* <div className="size-select">
                                <select>
                                    <option>UK</option>
                                </select>
                                <select>
                                    <option>SIZE</option>
                                </select>
                                <button className="size-guide">Size Guide</button>
                            </div> */}
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
    )
}

export default page
