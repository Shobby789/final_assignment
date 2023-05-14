import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./userScreens/home/Home";
import Cart from "./userScreens/cart/Cart";
import LoginPage from "./commonScreens/LoginPage/LoginPage";
import RegisterPage from "./commonScreens/RegisterPage/RegisterPage";
import UserProfile from "./userScreens/profile/UserProfile";
import UserOrders from "./userScreens/userOrders/UserOrders";
import Admin from "./adminScreens/Admin";
import Products from "./adminScreens/allProducts/Products";
import AddProduct from "./adminScreens/addProduct/AddProduct";
import Users from "./adminScreens/users/Users";
import Orders from "./adminScreens/seeOrders/Orders";
import AdminProfile from "./adminScreens/adminProfile/AdminProfile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProductDetailScreen from "./userScreens/productDetailScreen/ProductDetailScreen";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <Routes /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/My Orders" element={<UserOrders />} />
        <Route
          path="/Home/ProductDetails/:id"
          element={<ProductDetailScreen />}
        />
        {/* Admin */}
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Add Products" element={<AddProduct />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Profile" element={<AdminProfile />} />
      </Routes>
    </>
  );
}

export default App;
