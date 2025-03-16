// src/components/login/loginForm.jsx
import React, { useState } from 'react';
import styles from './loginForm.module.css'; // Importa los estilos CSS Modules

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar los datos de login al backend
    console.log('Login submitted:', { email, password });
    alert('Login enviado (simulado). Revisa la consola.'); // Simulación
    // Resetear el formulario después del envío (opcional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.loginFormContainer}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button type="submit" className={styles.button}>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;