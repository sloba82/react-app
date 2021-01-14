import React, {Component} from 'react';

const Context = React.createContext();

const reducer = ( state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state, 
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state, 
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}


export class Provider extends Component {
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
        ],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }

    };
    

    render() {
        return (
            <Context.Provider  value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;
