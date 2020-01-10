import React from 'react';
import PropTypes from 'prop-types';
import employeeData from '../../helpers/data/employeeData';
import Employee from '../Employee/Employee';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  static propTypes = {
    setSingleEmployee: PropTypes.func,
  }

  state = {
    employees: [],
    selectedEmployerId: null,
  }

  componentDidMount() {
    this.getEmployeeData();
  }

  getEmployeeData = () => {
    employeeData.getEmployees()
      .then((request) => {
        this.setState({ employees: request });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="staffRoom">
        <div><h1>Employees</h1></div>
        <div className="d-flex flex-wrap">
        {this.state.employees.map((employee) => (<Employee key={employee.id} employee={employee} setSingleEmployee={this.props.setSingleEmployee} />))}
      </div>
      </div>
    );
  }
}

export default StaffRoom;
