import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

function About() {
    const history = useHistory();
    return (
        <Fragment>
            <h3>This is the About page!</h3>
            <button onClick={() => history.goBack()}>Go Back</button>
        </Fragment>
    )
}

export default About;