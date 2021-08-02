import React, { Component } from 'react';
import { add, total, destroy, list } from 'cart-localstorage'

class PaymentConfirmed extends Component {


    componentDidMount() {
        console.log("hola")
        destroy()
    }

    goback = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div className="jumbotron">
                <h1>PAYMENT CONFIRMED</h1>
            </div>
        )
    }

}

export default PaymentConfirmed;