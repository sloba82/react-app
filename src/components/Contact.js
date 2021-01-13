import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';

class Contact extends Component {

    state = {
        showContactInfo: false
    };


    static propTypes = {
        contact: PropTypes.object.isRequired,
        deleteClickHandler: PropTypes.func.isRequired
    };


    onDeleteClick = () => {
        this.props.deleteClickHandler();
        console.log('delete');

    }

   
   // arrow funkcija moze da pristupi state vrednosti
   // onShowClick = (e)  - e je event objekat
   // onShowClick = (id, e) =>  { 
        // togluje odnosno menja showContactInfo stejt na suprotno od onog sto je trenutno
    //    this.setState({showContactInfo: !this.state.showContactInfo});



        // console.log(e.target);
        // console.log(id);
        // console.log(this.state);
  //  }
    
    render() {
        const {name, email, phone} = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <div>
                    <h4 
                        style={{ float:'left' }}
                        onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
                    > 
                        {name} 
                        <i className="fas fa-sort" />
                    </h4>
                    <div 
                        style={{ color:'red', cursor: 'pointer', float: 'right' }}
                        onClick={this.onDeleteClick}
                    >
                            X
                    </div>
                </div>

                {showContactInfo ? ( <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}

            </div>
        )
    }
} 


export default Contact;