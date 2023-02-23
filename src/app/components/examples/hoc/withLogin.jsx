import React from "react";
import Subtitle from "../../common/typografy/subtitle";

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
    <>
        {isLogin
            ? <Component {...props}/>
            : <Subtitle>auth</Subtitle> }
    </>);
};

export default withLogin;
