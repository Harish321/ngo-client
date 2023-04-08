import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import NgoForm from './components/NgoForm';
import FootBar from './components/FootBar';
import Banner from './components/Banner';
import Navbar2 from './components/NavBar2';
import Footer from './components/Footer';
import HorizontalScroll from './components/HorizontalScroll';
import SmallBanner from './components/SmallBanner';
import FooterCopyright from './components/FooterCopyright';
import TrustActivities from './components/TrustActivities';
import Donation from './components/Donation';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <>
      {/* <Banner /> */}
      <SmallBanner email="rashtrotthanyas@gmail.com" phone="+91 9818501613"/>
      <Navbar2 />
      <Donation />
      <AboutUs />
      <TrustActivities />
      {/* <HorizontalScroll></HorizontalScroll> */}
      {/* <NgoForm /> */}
      <Footer />
      {/* <FooterCopyright/> */}
    </>

  )
}

export default App
