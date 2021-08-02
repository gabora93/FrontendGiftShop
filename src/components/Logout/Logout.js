import React, { Component } from 'react';


class Logout extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.props.history.push('/')
        window.location.reload();
    }

    render(){
        return(
            <div></div>
        )
    }


}
export default Logout