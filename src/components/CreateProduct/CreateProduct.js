import React, { Component } from 'react';
import FormErrors from '../FormErrors/FormErrors';
import login from '../../services/login';
import newProduct from '../../services/newProduct';
class CreateProduct extends Component {

    state = {
        name: '',
        description: '',
        category: '',
        price: '',
        emailValid: false,
        passwordVaild: false,
        formErrors: { email: '', password: '' },
        formValid: false,
        errorMessage: ''
    }

    componentDidMount() {
        console.log("hola")

    }

    submitForm = (e) => {
        e.preventDefault();
        newProduct(this.state).then((resp) => {
            if (resp.status === 200) {
           
                this.props.history.push('/')
           
            } else {
                alert(resp.data)
                console.log(resp.data)
            }
        }).catch((err) => {
            console.log(err);
            alert("Wrong")
        })
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
        console.log(this.state.name, '<<<name')
        console.log(this.state.price, '<<<<price')
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordVaild = this.state.passwordVaild;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
                passwordVaild = value.length >= 6;
                fieldValidationErrors.password = passwordVaild ? '' : 'is too short :(';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordVaild: passwordVaild
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordVaild });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error')
    }

    error = () => {
        if (this.state.errorMessage.length === 0) {
            return <p>{this.state.errorMessage}</p>
        }
        return <p>error</p>
    }




    render() {


        return (
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
                                    <label htmlFor="email">Name</label>
                                    <input type="name" required className='form-control' name='name'
                                        placeholder='Product Name' value={this.state.name}
                                        onChange={this.handleUserInput} />
                                </div>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                    <label htmlFor="description">Description:</label>
                                    <input type="description" required className='form-control' name='description'
                                        placeholder='A brief description' value={this.state.description}
                                        onChange={this.handleUserInput} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                    <label htmlFor="price">Price</label>
                                    <input type="number" required className='form-control' name='price'
                                        placeholder='Product price' value={this.state.price}
                                        onChange={this.handleUserInput} />
                                </div>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                    <label htmlFor="category">Category:</label>
                                    <input type="category" required className='form-control' name='category'
                                        placeholder='category' value={this.state.category}
                                        onChange={this.handleUserInput} />
                                </div>
                            </div>
                        </div>

                        <button type='submit' class="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateProduct;