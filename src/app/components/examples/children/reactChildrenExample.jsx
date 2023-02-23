import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    const handleChange = (target) => {
        setData((p) => ({
            ...p,
            [target.name]: target.value
        }));
    };
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            value: data[child.props.name] || "",
            onChange: handleChange
        };
        return React.cloneElement(child, (config));
    });
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.node),
    PropTypes.node])
};
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>
                <TextField name="email" label='email'/>
                <TextField name="password" type="password" label='password'/>
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
