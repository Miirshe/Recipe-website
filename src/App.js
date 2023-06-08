// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Food from './Components/Food'
import Contact from './Components/Contact'
import About from './Components/About' 
// import Footers from './Components/Footers'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Food' element={<Food/>}></Route>
        <Route path='/Contact ' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        {/* <Route path='/Footers' element={<Footers/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
