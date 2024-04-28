import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/singleproduct' element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
