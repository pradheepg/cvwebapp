import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Section from './componets/Section';
import About from './componets/page/Blog';
import Mywork from './componets/page/mywork';
import Contactme from './componets/page/Resume';
import { Component } from 'react';
//import Home from './componets/page/home';
import { Route,Routes} from "react-router-dom"
import { Imageback } from './componets/imageback';
import image from "./image.jpf"; 
import Resume from './componets/page/Resume';
import Blog from './componets/page/Blog';



function App() {
  
  return (
    <div >
    <>
    <Navbar />
    <div >
      
    <Routes>
      <Route path='/resume' element={<Resume />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/' element={<Section />} />
      
      
    </Routes>
    
    </div>
    </>
    </div>
  );
}

export default App;
