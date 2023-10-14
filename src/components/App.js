import React from "react";
import { Container } from "react-bootstrap";
import AuthProvider from "./Context/AuthContext";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ResetPassword from "./ForgotPassword";
import Update from "./UpdateProfile";

const App = () => {
  return (
    // <AuthProvider>
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ResetPassword />} />
              <Route path="/update" element={<Update />} />
            </Routes>
          </AuthProvider>
          {/* <SignUp /> */}
        </div>
      </Container>
      {/* </AuthProvider> */}
    </>
  );
};

export default App;
