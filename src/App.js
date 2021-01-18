import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import Test from './components/Test/Test'

import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render () {
    return (
        <Provider> 
          <Router>
            <div className="App">

              {/* Header is function */}
              <Header branding = "Contact Manager" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contacts/add" component={AddContact} />
                  <Route exact path="/about/:id" component={About} />
                  <Route exact path="/test" component={Test} />
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
