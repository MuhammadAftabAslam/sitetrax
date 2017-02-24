import React, { PropTypes as T } from 'react';
import '../styles/styles.scss';
import '../styles/dashboard.scss';

class OptionThumbnail extends React.Component {
  handleClickAndPassIdBack() {
    const { onClick, id } = this.props;
    onClick(id);
  }
  render() {
    const { option, selectedClass } = this.props;
    return (
      <div className={`option-thumbnail-wrapper col-xs-12 ${selectedClass}`} style={{
            borderColor: `${option.backgroundColor}`
          }} onClick={this.handleClickAndPassIdBack.bind(this)}>
        <div className="option-thumbnail col-xs-12" style={{
            backgroundColor: `${option.backgroundColor}`
          }}>
          <div className="option-thumbnail-text-wrapper">
            <h7 className="option-thumbnail-title">{option.title}</h7>
            <p className="option-thumbnail-description">{option.description}</p>
          </div>
          <div className="option-thumbnail-image-wrapper">
            <i className={`fa ${option.icon} option-thumbnail-image`} aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

OptionThumbnail.propTypes = {
  // onClick: T.function,
  id: T.string,
  option: T.object
}

export default OptionThumbnail;