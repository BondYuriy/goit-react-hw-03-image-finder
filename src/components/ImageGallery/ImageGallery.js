import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, openModal }) => (
  <ul className={styles.gallery}>
    {items.map(item => {
      const { id, webformatURL } = item;

      return (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          openModal={() => openModal(id)}
        />
      );
    })}
  </ul>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
