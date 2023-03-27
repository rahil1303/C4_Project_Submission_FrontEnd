import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import { Provider } from "react-redux"; // Import Provider from react-redux
import Body from './components/Body';
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";
import store from "./store";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import OrderScreen from "./screens/OrderScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<OrderScreen/>}></Route>
=      </Routes>
    </Router>
  );
}

export default App;
