import Image from "next/image";
import styles from "./page.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Discount from "./Components/Discount/Discount";
import ProductPage from "./Components/Products/Products";


export default function Home() {
  return (
    <>
    <Header/>
    <Discount/>
    <ProductPage/>
         
    
    </>
  );
}
