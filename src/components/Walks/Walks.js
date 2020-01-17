import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Walks.scss';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';
import walkShape from '../../helpers/propz/walkShape';


class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
    allEmployees: PropTypes.arrayOf(employeeShape.employeeShape),
    setSingleWalk: PropTypes.func,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
    deleteSingleWalk: PropTypes.func,
    removeSelectedWalkId: PropTypes.func,
  }

  state = {
    assignedEmployee: '',
    assignedDog: '',
  }

  deleteWalkEvent = (e) => {
    e.preventDefault();
    const { deleteSingleWalk, walk } = this.props;
    deleteSingleWalk(walk.id);
  }

  setSelectedWalkId = (e) => {
    e.preventDefault();
    const { setSingleWalk, walk } = this.props;
    setSingleWalk(walk.id);
  }

  // setEditMode = (e) => {
  //   e.preventDefault();
  //   this.props.setEditMode(true);
  //   this.props.setWalkToEdit(this.props.walk);
  // }

  render() {
    const { walk } = this.props;

    return (
      <div className="Walk col-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Dog: {walk.dogId}</h5>
          <h5 className="card-title">Walker: {walk.employeeId}</h5>
          <h5 className="card-title">{moment(walk.walkDate).format('LL')}</h5>
          <button className="btn btn-warning" onClick={this.setEditMode}>Edit</button>
          <button className="btn btn-danger" onClick={this.deleteWalkEvent}>Delete</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Walk;
