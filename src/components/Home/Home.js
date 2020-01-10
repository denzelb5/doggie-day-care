import React from 'react';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkStation from '../WalkStation/WalkStation';

class Home extends React.Component {
  state = {
    selectedDogId: null,
    selectedEmployeeId: null,
    selectedWalkId: null,
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
        <DogPen setSingleDog={this.setSingleDog} />
        <StaffRoom setSingleEmployee={this.setSingleEmployee} />
        <WalkStation setSingleWalk={this.setSingleWalk} />
        {/* <Walk setSingleWalk={this.setSingleWalk} /> */}
      </div>
    );
  }
}

export default Home;
