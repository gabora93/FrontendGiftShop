import React, { Component } from 'react';
import deleteProduct from '../../services/deleteProduct';
import getProductDetails from '../../services/getProductDetails';

class DeleteProduct extends Component {

    state = {
        id:this.props.match.params.id,
        productData:""
    }

    componentDidMount(){
        getProductDetails(this.props.match.params.id).then((resp)=>{
            console.log(resp.data)
            this.setState({
                productData: resp.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    deleteProduct = () =>{
        deleteProduct(this.props.match.params.id).then((resp)=>{
            console.log(resp)
             this.props.history.push('/');
        }).catch((err)=>{
            console.log(err);
        })
    }

    goback = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div className="jumbotron">
                Are you sure you want to delete this product?
                <h1>{this.state.productData.name}</h1>
                <button onClick={this.deleteProduct}>
                    Yes
                </button>
                <button onClick={this.goback}>
                    No
                </button>
            </div>
        )
    }

}

export default DeleteProduct;