import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleWidth = () => {
        inputRef.current.style.width = "200px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                нопка
            </button>
            <button className="btn btn-warning" onClick={handleWidth}>
                Ширина
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
