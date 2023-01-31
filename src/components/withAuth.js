import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) {
      return <Component />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return AuthRoute;
};
export default withAuth;
