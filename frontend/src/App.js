import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Listing from './Pages/Listing/Listing';
import Footer from './components/Footer/Footer';
import Categorylist from './Pages/Categorylist/Categorylist';

function App() {
  return (
    <div>
       <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/listing/:mainProName' element={<Listing/>}/>
          <Route path='/:name' element={<Detail/>}/>
          <Route path='/name' element={<Categorylist/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </div>
  );
}

export default App;
