import './App.css'
import Home from './modules/home.module'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/navigation';
import Cart from './modules/cart.module';

function App() {

  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
