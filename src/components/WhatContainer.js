import React, { PropTypes as T } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import '../styles/styles.scss';
import '../styles/dashboard.scss';
import '../styles/what-container.scss';
import * as apiActions from '../actions/apiActions';
import * as dashboardActions from '../actions/dashboardActions';
import ImageThumbnail from './ImageThumbnail';

class WhatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { apiActions } = this.props;
    apiActions.loadHoistCamDirectorImages();
  }

  toggle(id) {
    const { dashboardActions, selectedHoistCamDirectorImages } = this.props;
    dashboardActions.updateSelectedHoistCamDirectorImages(selectedHoistCamDirectorImages, id, !_.get(this.state, id, false));
    this.setState({
      [id]: !_.get(this.state, id, false),
    });
  }

  render() {
    const { hoistCamDirectorImages } = this.props;
    return (
      <div className="recipe-container-wrapper col-xs-12 col-md-4">
        <div className="recipe-container col-xs-12">
          <div className="recipe-container-header" style={{ backgroundColor: '#ff5722' }}>What</div>
          <p className="recipe-container-label">Choose Images from: HoistCam Director</p>
          <div className="image-thumbnail-wrappers-container col-xs-12">
            { hoistCamDirectorImages && hoistCamDirectorImages.map((image, imageIndex) =>
              <ImageThumbnail image={image} key={imageIndex} id={image} onClick={this.toggle.bind(this)} selectedClass={this.state && this.state[image] ? "selected" : ""} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

WhatContainer.propTypes = {
  apiActions: T.object,
  dashboardActions: T.object
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    apiActions: bindActionCreators(apiActions, dispatch),
    dashboardActions: bindActionCreators(dashboardActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhatContainer);