import React from 'react';
import PropTypes from 'prop-types';
import Walk from '../Walks/Walks';
import walkData from '../../helpers/data/walkData';
import './WalkStation.scss';

class WalkStation extends React.Component {
  static propTypes = {
    setSingleWalk: PropTypes.func,
  }

  state = {
    walks: [],
    selectedWalkId: null,
  }


  componentDidMount() {
    this.getWalkData();
  }

  getWalkData = () => {
    walkData.getWalks()
      .then((request) => {
        this.setState({ walks: request });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <div><h1>Walk Schedule</h1></div>
        <div className="d-flex flex-wrap">
     {this.state.walks.map((walk) => (<Walk key={walk.id} walk={walk} setSingleWalk={this.props.setSingleWalk} />))}
      </div>
      </div>
    );
  }
}

export default WalkStation;
