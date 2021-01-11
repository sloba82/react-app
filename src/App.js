import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {

    const name = 'Larry';
    const showHello = true;

    const showMath = true;

    const num1 = 40;
    const num2 = 23;

    let math;

    if(showMath){
      math = <h4> {num1}+{num2} = { num1 + num2 }</h4>;
    } else {
      math = null;
    }


    return (


        <div className="App">
        {showHello ?  <h1>Hello { name.toUpperCase()} </h1> :  <h1>Hello  user</h1>}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. !! !!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 
          </a>

          {math}
         
        </header>
      </div>
    )

  };
}

export default App;
