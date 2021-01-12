import React, {Component} from 'react';
import './App.css';
import Contacts from './components/Contacts'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render () {
    return (
      <div className="App">

        {/* Header is function */}
        <Header 
          branding = "Contact Manager"
        />

        <div className="container">
          <Contacts/>

        </div>
      </div>
    );
  }
}

export default App;
