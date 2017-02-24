import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';
import * as actions from '../actions/apiActions';
import ReactSpinner from 'react-spinjs';

var opts = {
  lines: 13 // The number of lines to draw
, length: 23 // The length of each line
, width: 4 // The line thickness
, radius: 15 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: "#fff" // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolling: false,
    }
  }

  render() {
    const now = new Date();
    const currentYear = now.getFullYear();
    return (
      <div>
        <nav className="navbar navbar-fixed-top" style={{}}>
          <Link className="navbar-logo" to="/">SiteTrax</Link>
        </nav>

      {/* Body */}
        <div className="page-body">
          {this.props.children}
        </div>

      {/* 
      Footer 
        <footer className="footer container-fluid">
          <p className="col-xs-12 copyright-wrapper">© 1998-{currentYear} Netarus All Rights Reserved</p>
        </footer>
      */}
        <div className={"spinner-modal" + (this.props.loading ? " loading" : "")}>
          <div className="spinner-wrapper">
            <ReactSpinner config={opts} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object,
  children: PropTypes.element,
  loading: PropTypes.bool,
  url: PropTypes.string,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
