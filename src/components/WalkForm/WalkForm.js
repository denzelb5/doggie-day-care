import React from 'react';
import PropTypes from 'prop-types';
// import authData from '../../helpers/data/authData';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';
import walkShape from '../../helpers/propz/walkShape';

import './WalkForm.scss';

class WalkForm extends React.Component {
  static propTypes = {
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
    allEmployees: PropTypes.arrayOf(employeeShape.employeeShape),
    addWalk: PropTypes.func,
    editMode: PropTypes.bool,
    walkToEdit: walkShape.walkShape,
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
      });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.walkToEdit.id !== this.props.walkToEdit.id) && this.props.editMode) {
      this.setState(
        {
          dogId: this.props.walkToEdit.dogId,
          employeeId: this.props.walkToEdit.employeeId,
          date: this.props.walkToEdit.date,
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
      // uid: authData.getUid(),
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
    const { allDogs, allEmployees } = this.props;


    return (
      <form className="walkForm">
      <select onChange={this.dogIdChange} value={this.state.walkDogId} className="custom-select custom-select-sm mb-3">
  <option>Dogs</option>
  {
    allDogs.map((dog) => <option key={dog.id} >{dog.name}</option>)
  }
</select>

<select onChange={this.employeeIdChange} value={this.state.walkEmployeeId} className="custom-select custom-select-sm mb-3">
  <option>Employees</option>
  {
    allEmployees.map((employee) => <option key={employee.id}>{employee.firstName} {employee.lastName}</option>)
  }
</select>

<div className="form-group">
  <label htmlFor='dateSelection'>Select a Date</label>
  <input type='date' className='form-control' id='dateSelection' value={this.state.dateOfWalk} onChange={this.dateChange} />
</div>


 <button className="btn btn-warning" onClick={this.addWalkEvent}>Add Walk</button>
</form>

    );
  }
}

export default WalkForm;
