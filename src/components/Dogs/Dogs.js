import React from 'react';
// import PropTypes from 'prop-types';
import dogShape from '../../helpers/propz/dogShape';
import './Dogs.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;

    return (
      <div className="card col-2 dogcard">
        <img src={dog.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h3>Name: {dog.name}</h3>
          <h6>Owner: {dog.owner}</h6>
          <p className="card-text">Breed: {dog.description}</p>
        </div>
      </div>
    );
  }
}

export default Dog;
