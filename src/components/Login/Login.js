import React, { Component } from 'react';
import FormErrors from '../FormErrors/FormErrors';
import login from '../../services/login';
import authService from '../../services/authService';
class Login extends Component{

    state={
        email:'',
        password:'',
        emailValid: false,
        passwordVaild: false,
        formErrors: {email:'', password:''},
        formValid: false,
        errorMessage: ''
    }

    componentDidMount(){
        console.log("hola")
       
    }

    submitForm = (e) => {
        e.preventDefault();
        login(this.state).then((resp)=>{
            if(resp.status === 200){
                let token = resp.data.token
                localStorage.setItem('token',token);
                this.props.history.push('/')
                authService.getUser().then((resp)=>{
                    console.log('resp',resp);
                    localStorage.setItem('user',JSON.stringify(resp.data.user))
                    window.location.reload();

                })
            }else{
                alert(resp.data)
                console.log(resp.data)
            }
        }).catch((err)=>{
            console.log(err);
            alert("Wrong Credentials")
        })
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            ()=>{this.validateField(name,value)});
        console.log(this.state.email,'<<<email')
        console.log(this.state.password,'<<<<pass')
    }

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordVaild = this.state.passwordVaild;

        switch(fieldName){
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
                passwordVaild = value.length >=6;
                fieldValidationErrors.password = passwordVaild ? '' : 'is too short :(';
                break;
                default:
                break;
        }
        this.setState({formErrors:fieldValidationErrors,
        emailValid:emailValid,
    passwordVaild:passwordVaild},this.validateForm);
    }

    validateForm(){
        this.setState({formValid: this.state.emailValid && this.state.passwordVaild});
    }

    errorClass(error){
        return(error.length === 0 ? '' : 'has-error')
    }

    error=()=>{
        if(this.state.errorMessage.length === 0){
            return <p>{this.state.errorMessage}</p>
        }
        return <p>error</p>
    }


    

    render(){

    
        return(
            <div className='login-page d-flex justify-content-center'>
                <div className='form'>
                    <div className='panel panel-default'>
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div>
                        <p>{this.error}</p>

                    </div>
                    <form onSubmit={this.submitForm} className='login-form'>
                        <div className="row">
                            <div className="col">
                            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Email Addres:</label>
                            <input type="email" required className='form-control' name='email'
                                placeholder='Email' value={this.state.email}
                                onChange={this.handleUserInput}/>
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                            <label htmlFor="password">Password:</label>
                            <input type="password" required className='form-control' name='password'
                                placeholder='Password' value={this.state.password}
                                onChange={this.handleUserInput}/>
                        </div>
                            </div>
                        </div>
                        <button type='submit'>Login</button>

                        <p className='message'>Not having an account? Create one</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;