import React, { PropTypes as T } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import '../styles/styles.scss';
import '../styles/dashboard.scss';
import * as apiActions from '../actions/apiActions';
import * as dashboardActions from '../actions/dashboardActions';
import OptionThumbnail from './OptionThumbnail';
import _ from 'lodash';

class WhereContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle(id) {
    const { dashboardActions, selectedDeliveryOptions, deliveryOptions } = this.props;
    const option = _.find(deliveryOptions, (deliveryOption) => { return deliveryOption.id === id });
    dashboardActions.updateSelectedDeliveryOptions(selectedDeliveryOptions, option, !_.get(this.state, id, false));
    this.setState({
      [id]: !_.get(this.state, id, false),
    });
  }

  render() {
    const { deliveryOptions } = this.props;
    return (
      <div className="recipe-container-wrapper col-xs-12 col-md-4">
        <div className="recipe-container col-xs-12">
          <div className="recipe-container-header" style={{ backgroundColor: '#ffc107' }}>Where</div>
          <p className="recipe-container-label">Select where to deliver</p>
          <div className="option-thumbnail-wrappers-container col-xs-12">
            { deliveryOptions && deliveryOptions.map((option, optionIndex) =>
              <OptionThumbnail option={option} key={optionIndex} id={option.id} onClick={this.toggle.bind(this)} selectedClass={this.state && this.state[option.id] ? "selected" : ""} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

WhereContainer.propTypes = {
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
)(WhereContainer);