import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./style.scss";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button className="btn btn-success btn-lg" onClick={() => loginWithRedirect()}>
                Login
            </button>
        )
    )
}
export default LoginButton;