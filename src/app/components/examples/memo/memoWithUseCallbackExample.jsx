import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => { console.log("render бутон"); });
    return (
        <button
            className="btn btn-primary"
            onClick={onLogOut}
        >
            выйти
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEquel(prev, next) {
    if (prev.onLogOut !== next.onLogOut) {
        return false;
    } return true;
}
const MemoisedLogOutButton = React.memo(LogOutButton, areEquel);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
    <>
        <MemoisedLogOutButton onLogOut={handleLogOut}/>
        <button
            className={"btn btn-warning"}
            onClick={() => { setState(!state); }}
        >
            ререндер
        </button>
    </>
    );
};

export default MemoWithUseCallbackExample;
