import React from 'react';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkStation from '../WalkStation/WalkStation';
import doggieData from '../../helpers/data/doggieData';
import employeeData from '../../helpers/data/employeeData';
import WalkForm from '../WalkForm/WalkForm';
import walkData from '../../helpers/data/walkData';

class Home extends React.Component {
  state = {
    allDogs: [],
    allEmployees: [],
    allWalks: [],
    walkToEdit: {},
    // displayForm: false,
    selectedDogId: null,
    selectedEmployeeId: null,
    selectedWalkId: null,
  }

  componentDidMount() {
    this.getDogData();
    this.getEmployeeData();
    this.getWalkData();
  }

  getDogData = () => {
    doggieData.getAllDogs()
      .then((request) => {
        this.setState({ allDogs: request });
      })
      .catch((errorFromGetDogs) => console.error(errorFromGetDogs));
  }

  getEmployeeData = () => {
    employeeData.getEmployees()
      .then((request) => {
        this.setState({ allEmployees: request });
      })
      .catch((error) => console.error(error));
  }

  getWalkData = () => {
    walkData.getWalks()
      .then((request) => {
        this.setState({ allWalks: request });
      })
      .catch((error) => console.error(error));
  }

  addWalkData = (newWalk) => {
    walkData.addWalk(newWalk)
      .then(() => this.getWalkData())
      .catch((error) => console.error(error));
  }

  deleteSingleWalk = (walkId) => {
    walkData.deleteWalk(walkId)
      .then(() => {
        this.getWalkData();
      })
      .catch((error) => console.error(error));
  }

  setWalkToEdit = (walk) => {
    this.setState({ walkToEdit: walk });
  }

  removeSelectedWalkId = (e) => {
    this.preventDefault();
    const { setSingleWalk } = this.props;
  }

  setSingleDog = (selectedDogId) => {
    this.setState({ selectedDogId });
  }

  setSingleEmployee = (selectedEmployeeId) => {
    this.setState({ selectedEmployeeId });
  }

  setSingleWalk = (selectedWalkId) => {
    this.setState({ selectedWalkId });
  }

  render() {
    return (
      <div className="Home">
        <DogPen setSingleDog={this.setSingleDog} allDogs={this.state.allDogs} />
        <StaffRoom setSingleEmployee={this.setSingleEmployee} allEmployees={this.state.allEmployees} />
        <WalkStation setSingleWalk={this.setSingleWalk} deleteSingleWalk={this.deleteSingleWalk} dogs={this.state.allDogs} allEmployees={this.state.allEmployees} allWalks={this.state.allWalks} />
  <WalkForm allDogs={this.state.allDogs} allEmployees={this.state.allEmployees} editMode={this.editMode} walkToEdit={this.walkToEdit} addWalk={this.addWalkData} />
        </div>
    );
  }
}

export default Home;
