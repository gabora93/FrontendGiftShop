import React, { Component } from 'react';
import ProductService from '../../services/getProducts';
import ProductCard from '../ProductCard/ProductCard';
import isAdmin from '../../services/authHeader';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {
        products: "",
        inputSearch: ""
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("hola")
        ProductService().then((resp) => {
            console.log('resp', resp)
            this.setState({ products: resp.data.data })
        });

        console.log("bola")
    }

    redirect = (id) => {
        this.props.history.push(`/products/${id}`)
    }

    onChangeHandler = (e) =>{
        this.setState({
            inputSearch: e.target.value,
        })
      }


    renderProducts = () => {
        if (this.state.products !== "") {
            console.log('state', this.state)
            let products = this.state.products
            .filter(item => {
                if (!this.state.inputSearch) return true
                if (item.name.toLowerCase().includes(this.state.inputSearch.toLowerCase()) || item.category.toLowerCase().includes(this.state.inputSearch.toLowerCase())) {
                  return true
                }
              })
            .map((item, index) => {
                return (
                    <ProductCard
                        key={index}
                        product={item}
                        redirect={this.redirect}
                    />
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
            <div className="flex">


                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 text-center">
                        <h3 className="movies-title">All Products</h3>
                    </div>

                </div>
                { isAdmin() ? <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 text-center">
                       <Link className="btn btn-secondary" to='/product-new'>New Product +</Link>
                    </div>

                </div>: <div></div>}
<br/>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <label htmlFor="">Search</label>
                    <input type="text" value={this.state.inputSearch}  onChange={(event) =>this.onChangeHandler(event)} />

                    </div>
                </div>
<br/>
                <div className="row justify-content-center">
                 
                        {this.renderProducts()}
                   

                </div>
            </div>
        )
    }
}

export default Home;