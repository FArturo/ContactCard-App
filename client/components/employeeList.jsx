import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

import EmployeeDetail from './employeeDetail';

const PER_PAGE = 20;

class EmployeeList extends Component{
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.page = 1;
  }
  renderClick() {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1 ));
    this.page += 1;
  }
  render() {
    return(
      <div>
        <div className="employee-list">
          {
            this.props.employees.map((employee, i) => <EmployeeDetail employee={employee} key={i}/>)
          }
        </div>
        <button onClick={this.renderClick.bind(this)} className="btn btn-primary">
          Load More...
        </button>
      </div>
    );
  }
}

export default createContainer (() => {
  // setup subscription
  Meteor.subscribe('employees', PER_PAGE);

  // return an object. Whatever we send will be sent to the EmployeeList as this.props.
  return { employees: Employees.find({}).fetch()};

},EmployeeList);
