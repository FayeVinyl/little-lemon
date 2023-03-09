import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import OrderOnline from './components/OrderOnline';
import Reservations from './components/Reservations';
import Login from './components/Login';




function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element= { <Main /> } />
        <Route path="/about" element= { <About /> }  />
        <Route path="/menu" element= { <Menu /> }  />
        <Route path="/reservations" element= { <Reservations /> }  />
        <Route path="/order-online" element= { <OrderOnline /> }  />
        <Route path="/login" element= { <Login /> }  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
