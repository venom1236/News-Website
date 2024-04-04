import logo from './logo.svg';
import './App.css';
import HomeNews from './Pages/HomeNews';
import {BrowserRouter, Route, Routes, useHref} from 'react-router-dom'
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
const [value, setvalue] = useState("");
let datatransfer=(data)=>{
  console.log(data)
  setvalue(data)
}




  return (
    <div className="App">
    <BrowserRouter>
    <Navbar datatransfer={datatransfer}/>
    <Routes>
     <Route path='/'element={<HomeNews data={value}  />}/>
    </Routes>
    
    
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
