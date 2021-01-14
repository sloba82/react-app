import React, {Component} from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import AddContact from './components/contacts/AddContact'
import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render () {
    return (
        <Provider>
          <div className="App">

            {/* Header is function */}
            <Header 
              branding = "Contact Manager"
            />

            <div className="container">
              <AddContact />
              <Contacts/>

            </div>
          </div>
        </Provider>
    );
  }
}

export default App;
