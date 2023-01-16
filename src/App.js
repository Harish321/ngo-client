import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import NgoForm from './components/NgoForm';
import FootBar from './components/FootBar';

const App = () => {
  return (
    <>
      <Navbar />
      <NgoForm />
      <FootBar />
    </>

  )
}

export default App
