// src/components/login/loginFormRegister.jsx
import React, { useState } from 'react';
import styles from './loginFormRegister.module.css'; // Importa los estilos CSS Modules

const LoginFormRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar los datos de registro al backend
    console.log('Registration submitted:', { name, email, password });
    alert('Registro enviado (simulado). Revisa la consola.'); // Simulación
    // Resetear el formulario después del envío (opcional)
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.registerFormContainer}>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nombre:</label>
          <input
            type="text"
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña:</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Registrarse</button>
      </form>
    </div>
  );
};

export default LoginFormRegister;