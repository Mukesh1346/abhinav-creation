'use client';
import styles from './ProductPage.module.scss';
import Image from 'next/image';

const dummyProducts = [
  {
    id: 1,
    title: 'Classic T-Shirt',
    desc: 'High-quality cotton T-shirt with modern fit.',
    price: 1029,
    image: '/j1.jpg',
  },
  {
    id: 2,
    title: 'Summer Shirt',
    desc: 'Light and breezy for summer days.',
    price: 945,
    image: '/j2.jpg',
  },
  {
    id: 3,
    title: 'Denim Jacket',
    desc: 'Stylish and warm, perfect for any weather.',
    price: 1289,
    image:'/j4.jpg',
  },
  {
    id: 4,
    title: 'Denim Jacket',
    desc: 'Stylish and warm, perfect for any weather.',
    price: 1289,
    image:'/j5.jpg',
  },
  {
    id: 5,
    title: 'Denim Jacket',
    desc: 'Stylish and warm, perfect for any weather.',
    price: 1289,
    image:'/j6.jpg',
  },
];

export default function ProductPage() {
  return (
    <main className={styles.main}>
      <div className={styles.productsWrapper}>
        {dummyProducts.map((product) => (
          <div key={product.id} className={styles.product}>
            <figure>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className={styles.productImage}
              />
            </figure>

            <div className={styles.productDescription}>
              <div className={styles.info}>
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
              </div>
              <div className={styles.price}>{product.price}</div>
            </div>

            <div className={styles.productSidebar}>
              <button className={styles.buy}></button>
              <button className={styles.infoBtn}><span>M</span></button>
              <button className={styles.size}><span>SIZES</span></button>
              {/* <button className={styles.colors}>
                <span>
                  <span className={`${styles.color} ${styles.black}`} role="button" />
                  <span className={`${styles.color} ${styles.white}`} role="button" />
                  <span className={`${styles.color} ${styles.red}`} role="button" />
                </span>
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
