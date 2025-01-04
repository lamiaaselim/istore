import { useDispatch } from "react-redux";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllProducts } from "./API/product";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Store from './pages/Store';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { setProducts } from "./redux/slices/product";
import Signup from "./pages/Signup";

/*eslint-disable*/
function App() {
  const [cartCount, setCartCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      dispatch(setProducts(data));
    })();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={
              <Store cartCount={cartCount} setCartCount={setCartCount} />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
