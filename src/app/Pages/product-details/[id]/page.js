'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import '../../../Components/Product/ProductDetail.css';

const Page = () => {
  let { id } = useParams();
  const [ProductDetail, setProductDetail] = useState(null);
   console.log(id)
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
  ];

  useEffect(() => {
    if (id) {
      const product = dummyProducts.find((p) => p.id === Number(id));
      setProductDetail(product);
    }
  }, [id]);

  if (!ProductDetail) return <div className="container">Product not found.</div>;

  return (
    <div className="container">
      <div className="product-Page">
        <div className="product-main">
          <div className="product-image">
            <div className="discount-badge">30%</div>
            <Image src={ProductDetail.image} width={370} height={300} alt={ProductDetail.title} />
            {/* <div className="product-carousel">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div> */}
            <div className="other-variations ms-5">
              <Image src="/j1.jpg" width={60} height={40} alt="Variation 1" />
              <Image src="/j2.jpg" width={60} height={40} alt="Variation 2" />
              <Image src="/j3.jpg" width={60} height={40} alt="Variation 3" />
              <Image src="/j3.jpg" width={60} height={40} alt="Variation 3" />
            </div>
          </div>

          <div className="product-details p-5">
            <h1 className="product-title">{ProductDetail.title}</h1>
            {/* <span className="price-new">Price: ${ProductDetail.price}</span> <br /> */}
            <select className="form-control mt-3 w-50">
              <option>Available Sizes:</option>
              <option>Size 26</option>
              <option>Size 28</option>
              <option>Size 34</option>
              <option>Size 36</option>
            </select>
            <p className="product-desc">{ProductDetail.description}</p>
            {/* <div className="actions">
              <button className="add-to-cart">ADD TO CART</button>
              <button className="add-to-wishlist" disabled>
                ADD TO WISHLIST
              </button>
            </div> */}
            {/* <div className="delivery-estimate">
              <strong>DELIVERY ESTIMATE</strong>
              <br />
              <small>Read our Terms and Conditions</small>
            </div> */}
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs">
            <button className="tab active">DETAIL</button>
            {/* <button className="tab">SIZE DETAIL</button> */}
            
          </div>
          <div className="tab-content">
            <div className="product-info">
              <div>
                <strong>SKU</strong>: ASDK124535780X
              </div>
              <div>
                <strong>Upper Material</strong>: Leather
              </div>
              <div>
                <strong>Inner Material</strong>: Leather
              </div>
              <div>
                <strong>Sole Material</strong>: Synthetic
              </div>
              <div>
                <strong>Inner Sole Material</strong>: Synthetic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;











// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import '../../../Components/Product/ProductDetail.css';

// const Page = () => {
//     const { id } = useParams();
//     const [ProductDetail, setProductDetail] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);




     
// const dummyProducts = [
//     {
//       id: 1,
//       title: 'Classic T-Shirt',
//       desc: 'High-quality cotton T-shirt with modern fit.',
//       price: 1029,
//       image: '/j1.jpg',
//     },
//     {
//       id: 2,
//       title: 'Summer Shirt',
//       desc: 'Light and breezy for summer days.',
//       price: 945,
//       image: '/j2.jpg',
//     },
//     {
//       id: 3,
//       title: 'Denim Jacket',
//       desc: 'Stylish and warm, perfect for any weather.',
//       price: 1289,
//       image:'/j4.jpg',
//     },
//     {
//       id: 4,
//       title: 'Denim Jacket',
//       desc: 'Stylish and warm, perfect for any weather.',
//       price: 1289,
//       image:'/j5.jpg',
//     },
//     {
//       id: 5,
//       title: 'Denim Jacket',
//       desc: 'Stylish and warm, perfect for any weather.',
//       price: 1289,
//       image:'/j6.jpg',
//     },
//   ];


//     // useEffect(() => {
//     //     const fetchProduct = async () => {
//     //         try {
//     //             const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
//     //             setProductDetail(res.data);
//     //         } catch (err) {
//     //             console.log("Error Fetching Products:", err);
//     //         } finally {
//     //             setIsLoading(false);
//     //         }
//     //     };

//     //     if (id) fetchProduct();
//     // }, [id]);

//     return (
//         <div className='container'>
//             <div className="product-Page">
//                 <div className="product-main">
//                     <div className="product-image">
//                         <div className="discount-badge">30%</div>
//                         {ProductDetail.images && (
//                             <Image src={ProductDetail.images[0]} width={400} height={300} alt={ProductDetail.title} />
//                         )}
//                         <div className="product-carousel">
//                             <span className="dot active"></span>
//                             <span className="dot"></span>
//                             <span className="dot"></span>
//                             <span className="dot"></span>
//                             <span className="dot"></span>
//                         </div>
//                         <div className="other-variations">
//                             <Image src="/j1.jpg" width={60} height={40} alt="Variation 1" />
//                             <Image src="/j2.jpg" width={60} height={40} alt="Variation 2" />
//                             <Image src="/j3.jpg" width={60} height={40} alt="Variation 3" />
//                         </div>
//                     </div>

//                     <div className="product-details">
//                         <h1 className="product-title">{ProductDetail.title}</h1>
//                         <span className="price-new">Price: ${ProductDetail.price}</span> <br />
//                         <select className='form-control mt-3 w-25'>
//                             <option value="1">Available Sizes :</option>
//                             <option value="2">Size 26</option>
//                             <option value="3">Size 36</option>
//                             <option value="4">Size 28</option>
//                             <option value="5">Size 34</option>
//                         </select>
//                         <p className="product-desc">{ProductDetail.description}</p>
//                         <div className="actions">
//                             <button className="add-to-cart">ADD TO CART</button>
//                             <button className="add-to-wishlist" disabled>ADD TO WISHLIST</button>
//                         </div>
//                         <div className="delivery-estimate">
//                             <strong>DELIVERY ESTIMATE</strong><br />
//                             <small>Read our Terms and Conditions</small>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="product-tabs">
//                     <div className="tabs">
//                         <button className="tab active">DETAIL</button>
//                         <button className="tab">SIZE DETAIL</button>
//                         <button className="tab">RETURN POLICY</button>
//                         <button className="tab">DELIVERY INFO</button>
//                     </div>
//                     <div className="tab-content">
//                         <div className="product-info">
//                             <div><strong>SKU</strong>: ASDK124535780X</div>
//                             <div><strong>Upper Material</strong>: Leather</div>
//                             <div><strong>Inner Material</strong>: Leather</div>
//                             <div><strong>Sole Material</strong>: Synthetic</div>
//                             <div><strong>Inner Sole Material</strong>: Synthetic</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;
