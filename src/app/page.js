import Image from "next/image";
import styles from "./page.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from "./Components/Explore/Explore";
import AppSection from "./Components/AppSection/AppSection";
import QualitySection from "./Components/QualitySection/QualitySection";
import MainHero from "./Components/MainHero/MainHero";


export default function Home() {
  return (
    <>
    <MainHero />
    <Explore />
    <AppSection />
    {/* <QualitySection /> */}
    
   
         
    
    </>
  );
}
