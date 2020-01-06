import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.nandleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.nandleKeyPress);
  }

  nandleKeyPress = evt => {
    const { closeModal } = this.props;

    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  handleOverlayClick = ({ target }) => {
    const { current } = this.overlayRef;
    const { closeModal } = this.props;

    if (current && target === current) {
      closeModal();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className={styles.overlay}
        onClick={this.handleOverlayClick}
        ref={this.overlayRef}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
