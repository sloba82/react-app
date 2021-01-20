import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

export default class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',

    };

    async componentDidMount() {

        const { id } = this.props.match.params;

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        console.log(contact)

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });

    }


    onSubmit =  async (dispatch, e) => { 
        e.preventDefault();

            // const { name, email, phone } = this.state;


            // this.setState({
            //     name: '',
            //     email:'',
            //     phone:'',

            // });

            this.props.history.push('/');
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {

        const { name, email, phone  } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                    <div className="card mb-3">
                        <div className="card-body">Edit Contact</div>
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
                                <input type="submit"  value="Update contact" className="btn btn-outline-primary btn-block" style={{float: 'left'}}/>

                            </form>
                        </div>
                    </div>
                    );
                }}
            
            </Consumer>
        );
    }

}
