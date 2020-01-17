import React from 'react';
import PropTypes from 'prop-types';
import Walk from '../Walks/Walks';
import walkData from '../../helpers/data/walkData';
// import WalkForm from '../WalkForm/WalkForm';
import './WalkStation.scss';

class WalkStation extends React.Component {
  static propTypes = {
    setSingleWalk: PropTypes.func,
    deleteSingleWalk: PropTypes.func,
    removeSelectedWalkId: PropTypes.func,
  }

  state = {
    walks: [],
    employees: [],
    walkToEdit: {},
    showWalkForm: false,
    selectedWalkId: null,
  }


  componentDidMount() {
    this.getWalkData();
  }

  getWalkData = () => {
    walkData.getWalks()
      .then((request) => {
        this.setState({ walks: request });
      })
      .catch((error) => console.error(error));
  }


  updateWalk = (walkId, updatedWalk) => {
    walkData.updateWalk(walkId, updatedWalk)
      .then(() => {
        this.getWalkData();
        this.setState({ editMode: false, showWalkForm: false });
      })
      .catch((error) => console.error(error));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showWalkForm: true });
  }

  setWalkToEdit = (walk) => {
    this.setState({ walkToEdit: walk });
  }

  setShowWalkForm = () => {
    this.setState({ showWalkForm: true });
  }

  render() {
    const { deleteSingleWalk, dogs, allEmployees, allWalks } = this.props;
    return (
      <div>
        <div><h1>Walk Schedule</h1></div>
        <div className="d-flex flex-wrap">
     {allWalks.map((walk) => (<Walk key={walk.id} walk={walk} setSingleWalk={this.props.setSingleWalk} deleteSingleWalk={deleteSingleWalk} removeSelectedWalkId={this.removeSelectedWalkId}/>))}
      </div>
      </div>
    );
  }
}

export default WalkStation;
