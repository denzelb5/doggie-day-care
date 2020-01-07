import React from 'react';
import PropTypes from 'prop-types';
import Dog from '../Dogs/Dogs';
import doggieData from '../../helpers/data/doggieData';
// import dogShape from '../../helpers/propz/dogShape';
// import './DogPen.scss';


class DogPen extends React.Component {
  static propTypes = {
    setSingleDog: PropTypes.func,
  }

  state = {
    dogs: [],
    selectedDogId: null,
  }

  componentDidMount() {
    this.getDogData();
  }

  getDogData = () => {
    doggieData.getAllDogs()
      .then((request) => {
        this.setState({ dogs: request });
        console.error('dogs', { dogs: request });
      })
      .catch((errorFromGetDogs) => console.error(errorFromGetDogs));
  }

  render() {
    return (
      <div className="d-flex flex-wrap dogPen">
      {/* {dogCards} */}
      {this.state.dogs.map((dog) => (<Dog key={dog.id} dog={dog} setSingledog={this.props.setSingleDog} />))}
      </div>
    );
  }
}

export default DogPen;
