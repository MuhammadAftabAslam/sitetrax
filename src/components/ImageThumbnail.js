import React, { PropTypes as T } from 'react';
import '../styles/styles.scss';
import '../styles/dashboard.scss';

class ImageThumbnail extends React.Component {
  handleClickAndPassIdBack() {
    const { onClick, id } = this.props;
    onClick(id);
  }
  render() {
    const { image, selectedClass } = this.props;
    return (
      <div className={`image-thumbnail-wrapper col-xs-4 ${selectedClass}`} onClick={this.handleClickAndPassIdBack.bind(this)}>
        <div className="image-thumbnail col-xs-12" style={{
            backgroundImage: `url(${image})`
          }} />
      </div>
    );
  }
}

ImageThumbnail.propTypes = {
  id: T.string,
  image: T.string
}

export default ImageThumbnail;