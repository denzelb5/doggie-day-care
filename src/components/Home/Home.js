import React from 'react';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
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
      <div className="Home">
        <DogPen setSingleDog={this.setSingleDog} />
        <StaffRoom setSingleEmployee={this.setSingleEmployee} />
      </div>
    );
  }
}

export default Home;
