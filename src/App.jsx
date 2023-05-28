import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import ForgotPassword from "./pages/ForgotPassword";
import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Route>

          <Route path="*" element={<NoPage />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
