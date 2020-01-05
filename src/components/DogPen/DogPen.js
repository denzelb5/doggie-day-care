import React from 'react';
import PropTypes from 'prop-types';
import Dog from '../Dogs/Dogs';
import dogShape from '../../helpers/propz/dogShape';
// import './DogPen.scss';


class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const myDogs = this.props.dogs;
    const dogCards = myDogs.map((dog) => <Dog key={dog.id} dog={dog}/>);

    return (
      <div className="d-flex flex-wrap dogPen">{dogCards}</div>
    );
  }
}

export default DogPen;
