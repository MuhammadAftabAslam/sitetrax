import React, { PropTypes as T } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import '../styles/styles.scss';
import '../styles/dashboard.scss';
import * as apiActions from '../actions/apiActions';
import WhatContainer from '../components/WhatContainer';
import HowContainer from '../components/HowContainer';
import WhereContainer from '../components/WhereContainer';
import _ from 'lodash';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }

  createRecipe() {
    const { apiActions, selectedHoistCamDirectorImages, selectedProcessingOptions, selectedDeliveryOptions } = this.props;
    const params = {
      "userID":"123456",
      "jobID":"234",
      "imageSet": JSON.stringify(selectedHoistCamDirectorImages), // "['1.jpg','2.jpg','3.jpg']",
      "Operation": _.get(selectedProcessingOptions, "0.type", ""), // "stitch",
      "Value":"1",
      "resultPath":"path/to/output/directory/",
      "sendTo": _.get(selectedDeliveryOptions, "0.type", ""), // "email"
    };
    apiActions.postRecipe(params);
  }

  render() {
    return (
      <div className="dashboard-page">
        <div className="sidebar">
          <div className="sidebar-icon-wrapper container-fluid">
            <div className="sidebar-profile-image sidebar-icon-image" style={{
              backgroundImage: `url(${"https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"})`
            }} />
            <p className="sidebar-icon-label">Matt</p>
          </div>
          <div className="sidebar-icon-wrapper container-fluid">
            <i className="fa fa-dashboard sidebar-icon" aria-hidden="true"></i>
            <p className="sidebar-icon-label">Dashboard</p>
          </div>
        </div>
        <div className="main-container container-fluid col-xs-11">
          <WhatContainer />
          <HowContainer />
          <WhereContainer />
          <div className="dashboard-actions-wrapper col-xs-11">
            <button className="btn create-recipe-button" type="button" onClick={this.createRecipe.bind(this)}>Create</button>
          </div>
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  apiActions: T.object
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    apiActions: bindActionCreators(apiActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);