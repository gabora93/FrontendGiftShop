import React, { Component } from 'react';
import isAdmin from '../../services/authHeader';
import { Link } from 'react-router-dom';
import { add, total, destroy } from 'cart-localstorage' 

import './ProductCard.css';

class ProductCard extends Component {


    state = {
        product: this.props.product,
      //  rank: calculateRank(this.props.movie.rank)
    }

    addToCart = () =>{
        add({id:this.state.product.id, name: this.state.product.name, price: this.state.product.price})
        
    }


    render() {
        return (
            <div className="col-md-4">
                <figure className="card card-product" >
                    <div className="img-wrap"><img src="https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder-300x300.jpg" /></div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{this.state.product.name}</h4>
                        <div className="rating-wrap">
                        <div className="price-wrap h5">
                            <span className="price-new">{this.state.product.price}</span>
                        </div>
                        </div>
                    </figcaption>
                    <div className="bottom-wrap">
                    <button className="btn btn-sm btn-primary float-right" onClick={this.addToCart}>
                    Add to Cart
                                </button>
                      
                        <a href="" className="btn btn-sm btn-warning float-right" onClick={()=> this.props.redirect(this.state.product.id)}>See more</a>
                        {isAdmin() ?  <Link className="btn btn-danger boton-volver" to={`/product/delete/${this.state.product.id}`}>
                                    Delete
                                </Link>: <div></div> }
                                {isAdmin() ?  <Link className="btn btn boton-volver" to={`/product/edit/${this.state.product.id}`}>
                                    Edit
                                </Link>: <div></div> }
                      
                    </div>
                </figure>
            </div>
        )
    }
}

export default ProductCard;