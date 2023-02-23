import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setAuth] = useState(localStorage.getItem("auth"));
    function onLogin() {
        localStorage.setItem("auth", true);
        setAuth(localStorage.getItem("auth"));
    }
    function onLogout() {
        localStorage.setItem("auth", false);
        setAuth(localStorage.getItem("auth"));
    }
    return (
        <CardWrapper>
            <Component {...props} onLogout={onLogout} isAuth={isAuth} onLogin={onLogin}/>
        </CardWrapper>
     );
};

export default withFunctions;
