import React from 'react';
import DogPen from '../components/DogPen/DogPen';
import firebaseConnection from '../helpers/data/connection';
// import doggieData from '../helpers/data/doggieData';
import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    selectedDogId: null,
  }

  // componentDidMount() {
  //   const dogs = doggieData.getAllDogs();
  //   this.setState({ dogs });
  // }

  setSingleDog = (selectedDogId) => {
    this.setState({ selectedDogId });
  }

  render() {
    return (
      <div className="App">
        <DogPen setSingleDog={this.setSingleDog}/>
      </div>
    );
  }
}

export default App;
