import Image from "next/image";
import styles from "./page.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Explore from "./Components/Explore/Explore";
import AppSection from "./Components/AppSection/AppSection";
import QualitySection from "./Components/QualitySection/QualitySection";
import MainHero from "./Components/MainHero/MainHero";

import Header from "./Components/Header/Header";
import Discount from "./Components/Discount/Discount";
import ProductPage from "./Components/Products/Products";
import Unique from "@/app/Components/Unique/page";
import LatestProducts from "./Components/LatestProducts/Latestproduct";
import Testimonial from "./Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      
      <MainHero />
      <LatestProducts />
      <Header />
      <Explore />
      {/* <QualitySection /> */}
      <Discount />
      <ProductPage />
      <Unique />
      <AppSection />
      <LatestProducts />
      <Testimonial />
    </>
  );
}
