import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home";
import PageNotFound from "./pages/404";
import Forgotpassword from "./pages/forgotpassword";
import ResetPassword from "./pages/resetPassword";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<h2>Dashbaord</h2>}>
          <Route index element={<h2>Dashboard index</h2>} />
          <Route path="orders" element={<h2>Orders</h2>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
