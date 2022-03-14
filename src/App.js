import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './container/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Signup from './container/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
