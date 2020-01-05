import React from 'react';
import DogPen from '../components/DogPen/DogPen';
import doggieData from '../helpers/data/doggieData';
import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = doggieData.getAllDogs();
    this.setState({ dogs });
  }

  render() {
    return (
      <div className="App">
        <DogPen dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
