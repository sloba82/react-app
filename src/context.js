import React, {Component} from 'react';

const Context = React.createContext();

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
        ]
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
