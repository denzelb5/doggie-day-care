import React from 'react';
import PropTypes from 'prop-types';
import './Walks.scss';

class Walk extends React.Component {
  static propTypes = {
    setSingleEmployee: PropTypes.func,
  }

  render() {
    const { walk } = this.props;

    return (
      <div className="Walk col-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{walk.dogId}</h5>
          <h5 className="card-title">{walk.employeeId}</h5>
          <h5 className="card-title">{walk.date}</h5>
          {/* <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button> */}
        </div>
      </div>
    </div>
    );
  }
}

export default Walk;
