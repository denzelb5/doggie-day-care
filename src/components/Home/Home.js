import React from 'react';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkStation from '../WalkStation/WalkStation';
import doggieData from '../../helpers/data/doggieData';
import employeeData from '../../helpers/data/employeeData';
import WalkForm from '../WalkForm/WalkForm';

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
        <WalkStation setSingleWalk={this.setSingleWalk} dogs={this.state.allDogs} allEmployees={this.state.allEmployees}/>
        {/* <Walk setSingleWalk={this.setSingleWalk} /> */}
       <WalkForm allDogs={this.state.allDogs} allEmployees={this.state.allEmployees} walkToEdit={this.state.walkToEdit} />
        </div>
    );
  }
}

export default Home;
