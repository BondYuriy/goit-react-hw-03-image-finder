import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import API from '../../service/api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import ImageItem from '../ImageItem/ImageItem';
import Modal from '../Modal/Modal';
import styles from './App.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Finder extends Component {
  state = {
    items: [],
    search: '',
    pages: 1,
    error: null,
    isLoader: false,
    isModal: false,
    imageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, items } = this.state;

    if (prevState.search !== search) {
      this.getItems();
    }

    if (prevState.items.length !== items.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getItems = () => {
    const { search, pages } = this.state;

    this.setState({ isLoader: true });

    API.getData(search, pages)
      .then(data =>
        this.setState(prevState => ({
          items: [...prevState.items, ...data],
          pages: prevState.pages + 1,
        })),
      )
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoader: false });
      });
  };

  getSearchInput = str => {
    const { search } = this.state;

    if (str !== search) {
      this.setState({ items: [], search: str, pages: 1 });
    }
  };

  showsLargeImage = id => {
    const { items } = this.state;

    items.find(item => {
      return item.id === id
        ? this.setState({ imageUrl: item.largeImageURL })
        : null;
    });
  };

  openModal = id => {
    this.showsLargeImage(id);

    this.setState({ isModal: true });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { items, error, isLoader, isModal, imageUrl } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.getSearchInput} />
        {error && <h1>ERROR</h1>}
        {items.length > 0 && (
          <ImageGallery items={items} openModal={this.openModal} />
        )}
        {isLoader && (
          <div className={styles.loader}>
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000}
            />
          </div>
        )}
        {items.length > 0 && <Button addNewPage={this.getItems} />}
        {isModal &&
          createPortal(
            <Modal closeModal={this.closeModal}>
              <ImageItem imageUrl={imageUrl} />
            </Modal>,
            MODAL_ROOT,
          )}
      </div>
    );
  }
}
