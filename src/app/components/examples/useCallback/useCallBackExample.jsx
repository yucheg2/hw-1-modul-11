import React, { useEffect, useState, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    // without
    const withoutCallback = useRef(0);

    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    // with
    const withCallback = useRef(0);

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    const handleChange = ({ target }) => {
        setData(p =>
            ({
                ...p,
                [target.name]: target.value
            })
        );
    };

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider/>
            <p>withoutCallback count: {withoutCallback.current}</p>
            <p>withCallback count: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                value={data.email || ""}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
