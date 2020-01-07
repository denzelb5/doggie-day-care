import React from 'react';
import DogPen from '../components/DogPen/DogPen';
import firebaseConnection from '../helpers/data/connection';
import StaffRoom from '../components/StaffRoom/StaffRoom';
// import doggieData from '../helpers/data/doggieData';
import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    selectedDogId: null,
    selectedEmployeeId: null,
  }


  setSingleDog = (selectedDogId) => {
    this.setState({ selectedDogId });
  }

  setSingleEmployee = (selectedEmployeeId) => {
    this.setState({ selectedEmployeeId });
  }


  render() {
    return (
      <div className="App">
        <DogPen setSingleDog={this.setSingleDog} />
        <StaffRoom setSingleEmployee={this.setSingleEmployee} />
      </div>
    );
  }
}

export default App;
