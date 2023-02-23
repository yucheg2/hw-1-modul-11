import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFac(n) {
    console.log("Э");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const btnCollor = useMemo(() => (
        { value: (otherState ? "primary" : "warning") }
    ), [otherState]);
    useEffect(() => {
        console.log("render button");
    }, [btnCollor]);
    const toggleColor = () => {
        setOtherState(p => !p);
    };
    const handleDicriment = () => {
        setValue((prev) => prev - 10);
    };
    const handleIncriment = () => {
        setValue((prev) => prev + 10);
    };

    const fact = useMemo(() => runFac(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider/>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button className="btn btn-primary me-2" onClick={handleIncriment}>+</button>
                <button className="btn btn-primary" onClick={handleDicriment}>-</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn btn-" + btnCollor.value}
                    onClick={toggleColor}
                >
                    Цвет
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
