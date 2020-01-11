import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';

import './WalkForm.scss';

class WalkForm extends React.Component {
  static propTypes = {
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
    allEmployees: PropTypes.arrayOf(employeeShape.employeeShape),
    addWalk: PropTypes.func,
    editMode: PropTypes.bool,
  }

  state = {
    walkDogId: '',
    walkEmployeeId: '',
    walkDate: '',
  }

  componentDidMount() {
    const { walkToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({
        walkDogId: walkToEdit.dogId,
        walkEmployeeId: walkToEdit.employeeId,
        walkDate: walkToEdit.date,
        // uid: walkToEdit.uid,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.walkToEdit.id !== this.props.walkToEdit.id) && this.props.editMode) {
      this.setState(
        {
          dogId: this.props.walkToEdit.dogId,
          walkEmployeeId: this.props.walkToEdit.employeeId,
          walkDate: this.props.walkToEdit.date,
        },
      );
    }
  }

  addWalkEvent = (e) => {
    const { addWalk } = this.props;
    e.preventDefault();
    const newWalk = {
      dogId: this.state.walkDogId,
      employeeId: this.state.walkEmployeeId,
      walkDate: this.state.walkDate,
      uid: authData.getUid(),
    };
    addWalk(newWalk);
    this.setState({ walkDogId: '', walkEmployeeId: '', walkDate: '' });
  }

  updateWalkEvent = (e) => {
    e.preventDefault();
    const { updateWalk, walkToEdit } = this.props;
    const updatedWalk = {
      dogId: this.state.dogId,
      employeeId: this.state.employeeId,
      date: this.state.date,
      uid: walkToEdit.uid,
    };
    updateWalk(walkToEdit.id, updatedWalk);
  }

  dogIdChange = (e) => {
    e.preventDefault();
    this.setState({ walkDogId: e.target.value });
  }

  employeeIdChange = (e) => {
    e.preventDefault();
    this.setState({ walkEmployeeId: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ walkDate: e.target.value });
  }

  render() {
    const { allDogs, allEmployees, editMode } = this.props;
    // const displayAllEmployees = ;

    return (
      <form className="walkForm">
      <select class="custom-select custom-select-lg mb-3">
  <option selected>Dogs</option>
  {
    allDogs.map((dog) => <option key={dog.id} onChange={this.dogIdChange} value={this.state.walkDogId}>{dog.name}</option>)
  }
  {/* <option value={this.state.walkDogId} onChange={this.dogIdChange}>{displayAllDogs}</option> */}
</select>
<select class="custom-select custom-select-lg mb-3">
  <option selected>Employees</option>
  {
    allEmployees.map((employee) => <option key={employee.id} onChange={this.employeeIdChange} value={this.state.walkEmployeeId}>{employee.firstName} {employee.lastName}</option>)
  }
  {/* <option value={this.state.walkEmployeeId} onChange={this.employeeIdChange}>{displayAllEmployees}</option> */}
</select>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" type="date">Enter Date</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
{
  (editMode) ? (<button className="btn btn-warning" onClick={this.updateWalkEvent}>Update Walk</button>)
    : <button className="btn btn-warning" onClick={this.addWalkEvent}>AddWalk</button>
}
</form>

    );
  }
}

export default WalkForm;
