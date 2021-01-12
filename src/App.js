import React, {Component} from 'react';
import './App.css';
import Contact from './components/Contact'
import Header from './components/Header'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Thr app Component</h1>

        {/* Header is function */}
        <Header 
          branding = "Contact Manager"
        />
        <Contact
          name = "John doe"
          email = "john@test.com"
          phone = "555-333"
        />
        <hr/>
        <Contact
          name = "Karen Smith"
          email = "k.smith@test.com"
          phone = "666-999"
        />
      </div>
    );
  }
}

export default App;
