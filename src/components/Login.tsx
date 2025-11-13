import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      navigate('/channels');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>The Messenger</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User name"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
