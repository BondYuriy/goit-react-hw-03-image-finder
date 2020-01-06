import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageItem.module.css';

const ImageItem = ({ imageUrl, alt }) => (
  <img className={styles.img} src={imageUrl} alt={alt} />
);

ImageItem.defaultProps = {
  alt: 'gallery photo',
};

ImageItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageItem;
