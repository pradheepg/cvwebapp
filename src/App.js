import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Section from './componets/Section';
import About from './componets/page/about';
import Mywork from './componets/page/mywork';
import Contactme from './componets/page/contactme';
import { Component } from 'react';
import Home from './componets/page/home';
import { Route,Routes} from "react-router-dom"


function App() {
  
  return (
    <>
    <Navbar />
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contactme' element={<Contactme />} />
      <Route path='/about' element={<About />} />
      <Route path='/mywork' element={<Mywork />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
