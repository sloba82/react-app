import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

class Contact extends Component {

    state = {

    };


    static propTypes = {
        contact: PropTypes.object.isRequired,
    };

   
   // arrow funkcija moze da pristupi state vrednosti
   // onShowClick = (e)  - e je event objekat
    onShowClick = (id, e) =>  { 
        console.log(e.target);
        console.log(id);
        // console.log(this.state);
    }
    
    render() {
        const {name, email, phone} = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4 onClick={this.onShowClick.bind(this, name)}> 
                    {name} 
                    <i className="fas fa-sort" />
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        )
    }
} 


export default Contact;