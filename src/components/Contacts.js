import React, { Component } from 'react';
import Contact from './Contact';

 class Contacts extends Component {
state = {
    contacts:[
        {
            id:1,
            name:"john doe",
            email:"jd@gmail.com",
            phone:"11111-1111"
        },
        {
            id:2,
            name:"Nikola Nikolic",
            email:"nn@gmail.com",
            phone:"2222-2222"
        },
        {
            id:3,
            name:"Petar Petrovic",
            email:"pp@gmail.com",
            phone:"3333-333"
        }
    ]
};


deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter( contact => contact.id !==  id);
    
    this.setState({
        contacts: newContacts
    });
    
    console.log(id)
}
    render() {

        const {contacts}  = this.state;    
        return (
            <React.Fragment>
                    {contacts.map(contact => (
                        <Contact
                        key={contact.id}
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)} //mora se proslediti i this
                        />
                    ))}
            </React.Fragment>
        );
    }
}


export default Contacts;