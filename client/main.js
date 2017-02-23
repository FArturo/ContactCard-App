import React, { Component } from 'react';
import { render } from 'react-dom';
import EmployeeList from './components/employeeList';

class App extends Component {
  render() {
    return(
      <div className="container">
        <EmployeeList />
      </div>
    );
  }
}

Meteor.startup(() => {
  render(<App/>, document.getElementById('root'))
});
