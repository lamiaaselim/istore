import { useDispatch } from "react-redux";
import "./styles/App.css";
import "./styles/admin.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllProducts } from "./API/product";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { setProducts } from "./redux/slices/product";
import Signup from "./pages/Signup";
import AdminLayout from './admin/layouts/AdminLayout';
import ManageProducts from './admin/pages/ManageProducts';
import ManageOrders from './admin/pages/ManageOrders';
import ManageUsers from './admin/pages/ManageUsers';
import Dashboard from './admin/pages/Dashboard';
import ProtectedRoute from "./components/common/ProtectedRoute";

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
        <Route path="/admin" element={
          <ProtectedRoute>
          <AdminLayout />
          </ProtectedRoute>
          }>
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />
          <Route path="products" element={<ProtectedRoute><ManageProducts /></ProtectedRoute> } />
          <Route path="orders" element={<ProtectedRoute><ManageOrders /> </ProtectedRoute>} />
          <Route path="users" element={<ProtectedRoute> <ManageUsers /> </ProtectedRoute>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
