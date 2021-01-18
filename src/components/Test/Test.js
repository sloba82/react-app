import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                userId: data.id
            }))
    }

    // componentWillMount(){
    //     console.log('componentWillMount');
    // }

    // componentDidUpdate(){
    //     console.log('componentDidUpdate');
    // }

    render() {
        const { title, userId } = this.state;
        return (
            <div>
                <h1>{ title }</h1>
                <p>{ userId }</p>
            </div>
        )
    }
}
