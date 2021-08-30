import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { Button } from "./Button";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <Button
          onClick={() => {
            loginWithRedirect();
          }}
          name={"Login"}
        />
      ) : (
        <Profile />
      )}
    </>
  );
};

export default LoginButton;
