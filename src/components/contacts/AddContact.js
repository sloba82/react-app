import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

 class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',

    };

    onSubmit = (dispatch, e) => { 
        e.preventDefault();

            const { name, email, phone } = this.state;

            const newContact = {
                name,
                email,
                phone
            }
    
            axios.post(`https://jsonplaceholder.typicode.com/users`, newContact)
            .then(res =>  dispatch({type: 'ADD_CONTACT', payload: res.data}));

          //  dispatch({type: 'ADD_CONTACT', payload: newContact});
   
            // Clear state
            this.setState({
                name: '',
                email:'',
                phone:'',

            });


            this.props.history.push('/');
      
    };



    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {

        const { name, email, phone  } = this.props;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                    <div className="card mb-3">
                        <div className="card-body">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                <TextInputGroup 
                                    label="Name"
                                    name="name"
                                    value={name}
                                    placeholder="Enter name"
                                    onChange={this.onChange}
                           
                                />

                                <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter email"
                                    type="email"
                                    onChange={this.onChange}
                                  
                                />

                                <TextInputGroup 
                                    label="phone"
                                    name="phone"
                                    value={phone}
                                    placeholder="Enter Phone"
                                    onChange={this.onChange}
                                   
                                />
                                <input type="submit"  value="Add" className="btn btn-outline-primary btn-block" style={{float: 'left'}}/>

                            </form>
                        </div>
                    </div>
                    );
                }}
            
            </Consumer>
        );
    }
}

export default AddContact;
