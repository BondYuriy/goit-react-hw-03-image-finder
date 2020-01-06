import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, alt, openModal }) => (
  <li className={styles.item}>
    <img
      src={webformatURL}
      alt={alt}
      className={styles.image}
      role="presentation"
      onClick={openModal}
    />
  </li>
);

ImageGalleryItem.defaultProps = {
  alt: 'gallery photo',
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
