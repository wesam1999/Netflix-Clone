import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';


import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
    
   <Routes>
    
       <Route path='/' exact  element={<Home/>} />
  
   
   </Routes>
 </div>
  );
}

export default App;
