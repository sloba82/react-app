import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../contact.css';
import { Consumer } from '../../context';

class Contact extends Component {

    state = {
        showContactInfo: false
    };

    static propTypes = {
        contact: PropTypes.object.isRequired,

    };

    onDeleteClick = (id, dispatch ) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    };

    render() {
        const {id, name, email, phone} = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;

                    return (
                        <div className="card card-body mb-3">
                            <div>
                                <h4 
                                    style={{ float:'left' }}
                                    onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
                                > 
                                    {name}  id: {id}
                                    
                                </h4>
                                <div 
                                    style={{ color:'red', cursor: 'pointer', float: 'right' }}
                                    onClick={this.onDeleteClick.bind(this, id , dispatch)}
                                >
                                        X
                                </div>
                            </div>
            
                            {showContactInfo ? ( <ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}
            
                        </div>
                    );
                }}
            </Consumer>
        );
    }
} 


export default Contact;