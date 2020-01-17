import React from 'react';
import PropTypes from 'prop-types';
import './Employee.scss';
import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
    setSingleEmployee: PropTypes.func,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="card col-2" id="employeeCard">
        <h5 className="card-title">Name: {employee.firstName} {employee.lastName}</h5>
        <p>Phone: {employee.phone}</p>
      </div>
    );
  }
}

export default Employee;
