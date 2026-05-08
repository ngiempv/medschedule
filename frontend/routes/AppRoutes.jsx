import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ClinicListPage from "../pages/ClinicListPage";
import ClinicDetailPage from "../pages/ClinicDetailPage";
import BookingPage from "../pages/BookingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="clinics" element={<ClinicListPage />} />
          <Route path="clinics/:id" element={<ClinicDetailPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;