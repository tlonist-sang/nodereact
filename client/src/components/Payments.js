import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useDispatch} from "react-redux";
import * as actions from '../actions';
import {handleToken} from "../actions";



const Payments = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <StripeCheckout
                amount={500}
                token={token => {dispatch(handleToken(token))}}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name={"Emaily"}
                description={"$5 for 5 email credits"}
            >
                <button className={"btn"}>Add credits</button>
            </StripeCheckout>
        </div>
    )
}

export default Payments;
