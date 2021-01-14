import React, { Component } from 'react'

 class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {

        const { name, email, phone } = this.state; 
        return (
            <div className="card mb-3">
                <div className="card-body">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label htmlFor="name" style={{ float:'left' }}>Name</label>
                            <input 
                                type="text" 
                                name="name"
                                className="form-control form-control-lg" 
                                placeholder="Enter name"
                                value={name}
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
                                value={email}
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
                                value={phone}
                                onChange={this.onChange}
                            />
                        </div>
                        <input type="submit"  value="Add" className="btn btn-outline-primary btn-block" style={{float: 'left'}}/>

                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;
