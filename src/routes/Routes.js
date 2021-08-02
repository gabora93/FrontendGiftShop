import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route, Redirect } from 'react-router-dom';

import NavBar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import Logout from '../components/Logout/Logout';
import checkToken from '../components/resolvers/checkToken';
import Signup from '../components/Signup/Signup';
import Home from '../components/Home/Home';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import DeleteProduct from '../components/DeleteProduct/DeleteProduct';
import CreateProduct from '../components/CreateProduct/CreateProduct';
import EditProduct from '../components/EditProduct/EditProduct';
import Cart from '../components/Cart/Cart';
import PaymentConfirmed from '../components/PaymentConfirmed/PaymentConfirmed';

class Routes extends Component{



    render(){

        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render= {(props) => (
                checkToken() === true ? <Component {...props} /> : <Redirect to="/login" />
                )} />
        )


        return(
            <Router>
                <main>
                <NavBar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={Signup}/>
                <Route path="/login" component={Login} />
                <Route path="/products/:id" component={ProductDetail} />
                <Route exact path="/cart" component={Cart} />
                <PrivateRoute exact path='/logout' component={Logout}/>
                <PrivateRoute exact path='/product/delete/:id' component={DeleteProduct}/>
                <PrivateRoute exact path='/product-new' component={CreateProduct}/>
                <PrivateRoute exact path='/product/edit/:id' component={EditProduct}/>
                <PrivateRoute exact path='/payment' component={PaymentConfirmed}/>



                </main>
            </Router>
        )
    }
}


export default Routes;