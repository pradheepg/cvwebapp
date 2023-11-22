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
import { Imageback } from './componets/imageback';
import image from "./image.jpf"; 



function App() {
  
  return (
    <div style={{ backgroundImage:`url(${image})` }}>
    <>
    <Navbar />
    <div >
      
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contactme' element={<Contactme />} />
      <Route path='/about' element={<About />} />
      <Route path='/mywork' element={<Mywork />} />
    </Routes>
    <Section />
    </div>
    </>
    </div>
  );
}

export default App;
