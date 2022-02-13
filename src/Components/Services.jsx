import React from "react";
import { useParams } from "react-router";

function Services(props) {
    const { service } = useParams();
    return <h3>This is {props.name} {service}</h3>
}

export default Services;