import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Listing from './Pages/Listing/Listing';

function App() {
  return (
    <div>
       <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/listing' element={<Listing/>}/>
          <Route path='/detail' element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
