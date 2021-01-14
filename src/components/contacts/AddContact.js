import React, { Component } from 'react'
import { Consumer } from '../../context';


 class AddContact extends Component {



    onSubmit = (dispatch, e) => { 
        e.preventDefault();
        console.log(this.state);

        const { name, email, phone } = this.state;
        const contact = {
            id: Math.random(),
            name,
            email,
            phone
        }

        dispatch({type: 'ADD_CONTACT', payload: contact});
        console.log(contact)
    };

    static defaultProps = {
        name: 'Fredy Shmit',
        email: 'fredy@test.com',
        phone: '333-555'
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {

        const { name, email, phone } = this.props;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                    <div className="card mb-3">
                        <div className="card-body">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                <div className="form-group">
                                    <label htmlFor="name" style={{ float:'left' }}>Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        className="form-control form-control-lg" 
                                        placeholder="Enter name"
                                        defaultValue={name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" style={{ float:'left' }}>Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control form-control-lg" 
                                        placeholder="Enter email"
                                        defaultValue={email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" style={{ float:'left' }}>Phone</label>
                                    <input 
                                        type="text" 
                                        name="phone"
                                        className="form-control form-control-lg" 
                                        placeholder="Enter phone"
                                        defaultValue={phone}
                                        onChange={this.onChange}
                                    />
                                </div>
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
