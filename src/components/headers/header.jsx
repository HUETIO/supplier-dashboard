import React, { useState } from 'react';
import logo from '../../logo.svg';
import styles from './header.module.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false); // Estado para controlar la visibilidad del login
  const [showRegister, setShowRegister] = useState(false); // Estado para controlar la visibilidad del registro

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Mi Aplicación</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>Inicio</a>
            </li>
            <li className={styles.navItem}>
              <a href="/features" className={styles.navLink}>Características</a>
            </li>
            <li className={styles.navItem}>
              <a href="/pricing" className={styles.navLink}>Precios</a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact" className={styles.navLink}>Contacto</a>
            </li>
            {/* Botón de Iniciar Sesión con su modal */}
            <li className={styles.navItem}>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.navLink}
                  onClick={() => {
                    setShowLogin(!showLogin); // Alternar visibilidad del login
                    setShowRegister(false); // Ocultar el registro si está visible
                  }}
                >
                  Iniciar Sesión
                </button>
                {showLogin && (
                  <div className={`${styles.modal} ${styles.show}`}>
                    <h2>Iniciar Sesión</h2>
                    <form>
                      <input type="email" placeholder="Correo electrónico" />
                      <input type="password" placeholder="Contraseña" />
                      <button type="submit">Iniciar Sesión</button>
                    </form>
                  </div>
                )}
              </div>
            </li>
            {/* Botón de Registrarse con su modal */}
            <li className={styles.navItem}>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.navLink}
                  onClick={() => {
                    setShowRegister(!showRegister); // Alternar visibilidad del registro
                    setShowLogin(false); // Ocultar el login si está visible
                  }}
                >
                  Registrarse
                </button>
                {showRegister && (
                  <div className={`${styles.modal} ${styles.show}`}>
                    <h2>Registrarse</h2>
                    <form>
                      <input type="text" placeholder="Nombre completo" />
                      <input type="email" placeholder="Correo electrónico" />
                      <input type="password" placeholder="Contraseña" />
                      <button type="submit">Registrarse</button>
                    </form>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;