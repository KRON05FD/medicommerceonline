import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../login/login.js';
import Modal from '../modal/modal.js';
import logo from '../../images/logoMC.webp';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true); //Abre modal
  };

  const closeModal = () => {
    setShowModal(false); // Cierra modal
  };

  return (
    <header className="header-container">
      <div className="logo-section">
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
        <img className="header-logo" src={logo} alt="Logo MediCommerce" />  
      </div>

      <div className="search-section">
        <form className="search-form">
          <input type="text" className="search-input" placeholder="¿Qué estás buscando?" />
          <button className="search-button" type="submit">Buscar</button>
        </form>
      </div>

      <div className="user-section">
        <button onClick={handleLoginClick} className="user-link">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span>Mi cuenta</span>
        </button>
      </div>
      
      {showModal && (
          <Modal onClose={closeModal}>
            <Login />
          </Modal>
      )}
      
    </header>
  );
};

export default Header;