import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

import './WalkForm.scss';

class WalkForm extends React.Component {
  static propTypes = {
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
    const { editMode } = this.props;

    return (
      <form className="walkForm">
      <select class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value={this.state.walkDogId} onChange={this.dogIdChange}>{this.state.walkDogId}</option>
</select>
<select class="custom-select custom-select-lg mb-3">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">With textarea</span>
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
