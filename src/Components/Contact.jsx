import React, { Fragment } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";

const Contact = (props) => {
    const { namePara, lnamePara } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location)
    console.log(history)
    return(
        <Fragment>
            <h3>This is the {props.name} {namePara} {lnamePara}</h3>
            {location.pathname === '/contact/tharindu/lakmal' ? (<button>Welcome {props.name} {namePara}</button>) : null}
            <button onClick={() => history.goBack()}>Go Back</button>
            <button onClick={() => history.push('/services')}>Go to Services</button>
            <h4> The location is {location.pathname}</h4>
        </Fragment>
    )
}

export default Contact;