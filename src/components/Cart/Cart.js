import React, { Component } from 'react';
import { add, total, destroy, list } from 'cart-localstorage'
import isLoged from '../../services/isloged';
import { Link } from 'react-router-dom';

class Cart extends Component {


    state = {
        products: ''
        //  rank: calculateRank(this.props.movie.rank)
    }

    componentDidMount() {
        console.log("hello cart")
        this.getItems()
    }

    getItems = () => {
        const items = list();
        console.log(items);
        this.setItems(items)
    }

    setItems = (items) => {
        console.log("aqui items", items)
        this.setState({
            products: items
        })
    }


    renderProducts = () => {
        console.log('STATE', this.state);
        if (this.state.products !== "") {
            console.log('state', this.state)
            let products = this.state.products.map((product, index) => {
                return (
                    <tr>

                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                )
            })
            return products

        } else {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h1>My cart:</h1>
                    </div>

                </div>
                <div className="row justify-content-left">
                    <div className="col">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProducts()}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row-inline">
                    <div className="col-inline">
                        <h2>Total:</h2>
                        <h3>{total()}</h3>
                    </div>
                </div>
                <div className="row-inline">
                    <div className="col-inline">
                        {isLoged() ? <Link className="btn btn-info" to='/payment' >Make Payment</Link> : <Link className="btn btn-info" to='/signup'>Register to Pay</Link>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
