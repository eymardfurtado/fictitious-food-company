import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../axios-form';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { updateObject, checkValidity } from '../../shared/utility';

class ContactData extends Component {
    state = {
        formSubmitted: false,
        failedToSubmit: false,
        formIsValid: false,
        userForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                    label: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email',
                    label: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            HowDidYouHear: {
                elementType: 'select',
                elementConfig: {
                    label: "How did you find us?",
                    options: [
                        { value: 'Friends', displayValue: 'Friends' },
                        { value: 'Search Engine', displayValue: 'Search Engine' },
                        { value: 'Advertisement', displayValue: 'Advertisement' },
                        { value: 'Other', displayValue: 'Other' }]
                },
                value: '',
                validation: {},
                valid: true,
                touched: false
            },

            Newsletter: {
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                    label: 'Newsletter?',
                    label2: "Yes, please!"
                },
                value: '',
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },

            Feedback: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    label: 'Drop us a line',
                    placeholder: 'Your comments'
                },
                value: '',
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },
        }
    }


    contactSubmitHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.userForm) {
            formData[formElementIdentifier] = this.state.userForm[formElementIdentifier].value
        }

        const user = {
            userData: formData
        }

        axios.post('/users.json', user)
            .then(response => console.log(response))
            .catch(error =>  { 
                console.log(error)
                this.setState({failedToSubmit: true})}
                );
        axios.get('/users.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                    this.setState({ formSubmitted: true });
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({failedToSubmit: true})
            });
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFormElement = updateObject(this.state.userForm[inputIdentifier], {
            value: event.target.value,
            valid: event.type == 'blur' ? checkValidity(this.state.userForm[inputIdentifier].elementConfig.type, event.target.value, this.state.userForm[inputIdentifier].validation) : true,
            touched: true
        });

        const updatedOrderForm = updateObject(this.state.userForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;

        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ userForm: updatedOrderForm, formIsValid: formIsValid });

    }

    render() {
        const formElementsArray = [];

        for (let key in this.state.userForm) {
            formElementsArray.push({
                id: key,
                config: this.state.userForm[key]
            })
        }


        let form = (
            <form className={classes.Form} onSubmit={this.contactSubmitHandler}>

                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                    />
                ))}
                <div className={classes.Button} title="must enter name and valid email to submit">
                    <Button btnType="Important" clicked={this.contactSubmitHandler} disabled={!this.state.formIsValid}>Send</Button>
                </div>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner />
        }

        if (this.props.purchased) {
            form = <h2>Thank you for your order!</h2>
        }

        if (this.state.formSubmitted) {
            form = <h3>Thank you for reaching out!</h3>
        }

        let errorMessage = this.state.failedToSubmit ? (<h3 style={{ color: 'red'}}>Something Went Wrong</h3>) : null;
        
        return (
            <div className={classes.Title} id="contact">
                <h2>We would love to hear from you</h2>
                {errorMessage}
                <div className={classes.ContactData}>
                    {form}
                </div>
            </div>
        );
    }
}

export default ContactData;
