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

const App = () => {
  return (
    <>
      <Banner />
      <Navbar2 />
      <HorizontalScroll></HorizontalScroll>
      {/* <NgoForm /> */}
      {/* <Footer /> */}
    </>

  )
}

export default App
