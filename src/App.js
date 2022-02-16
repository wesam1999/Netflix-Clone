import './App.css';
import Home from './components/Home/Home';
import  Navbar  from './components/Navbar/Navbar';
import FavList from './components/FavList/FavList';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
  <Navbar/>
   <Routes>
    <Route path='/fav'element={<FavList/>}/>
       <Route path='/' exact  element={<Home/>} />
  
   
   </Routes>
 </div>
  );
}

export default App;
