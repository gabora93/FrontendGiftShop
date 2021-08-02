import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getProductDetails from '../../services/getProductDetails';
class ProductDetail extends Component {

    state = {
        id:this.props.match.params.id,
        product:""
    }

    componentDidMount(){
        getProductDetails(this.state.id).then((resp)=>{
            console.log(resp)
            this.setState({
                product:resp.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    loadProduct(){
        const {id, name, price, description, category} = this.state.product

        if(!this.state.product){
            return (
                <div><h1>Loading...</h1></div>
            )
        }else{
            return(
                 <div className="col">
                <figure className="card card-product" onClick={()=> this.props.redirect(this.state.product.id)}>
                    <div className="img-wrap"><img src="https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder-300x300.jpg" /></div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{name}</h4>
                        <p class="desc">{description}</p>
                        <div className="rating-wrap">
                        <div className="price-wrap h5">
                            <span className="price-new">{price}</span>
                        </div>
                        </div>
                    </figcaption>
                    <div className="bottom-wrap">
                      
                        <a href="" className="btn btn-sm btn-primary float-right">Add to Cart</a>
                        
                    </div>
                </figure>
            </div>
            )
        }
    }


    render(){
        return (
            <div className="flex justify-content-center">
                <br/>
                {this.loadProduct()}
            </div>
        )
    }
}

export default ProductDetail;