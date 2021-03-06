import React, { useState, useEffect } from "react";
import { fire } from './conf/firebase'
import Auth from './components/Auth'
import { useForm } from './hooks/useForm';
import './App.css';
import { AppRoute } from "./AppRoute";

function App() {
  const [value, handleInputChange, reset] = useForm({ email: '', password: '' });
  const [user, setUser] = useState('')
  const [errors, setErrors] = useState({ emailError: '', passwordError: '' });
  const [hasAccount, setHasAccount] = useState(false);

  const clearErrors = () => {
    setErrors({ emailError: '', passwordError: '' });
  };

  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(value.email, value.password)
      .catch(e => {
        if (e.code === 'auth/invalid-email' || 'auth/user-disabled' || 'auth/user-not-found') {
          setErrors({
            ...errors,
            emailError: e.message
          });
        } else if (e.code === 'auth/wrong-password') {
          setErrors({
            ...errors,
            passwordError: e.message,
          });
        };
      });
  };

  const handleSignup = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .catch(e => {
        if (e.code === 'auth/invalid-email' || 'auth/email-already-in-use') {
          setErrors({...errors, emailError: e.message });
        } else if (e.code === 'auth/weak-password') {
          setErrors({ ...errors, passwordError: e.message });
        };
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        reset()
        setUser(user);
      } else {
        setUser('');
      };
    })
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      { user ? (
        <AppRoute />
      ) : (  
        <Auth
          value={value}
          handleInputChange={handleInputChange}
          errors={errors}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        />
      )}
    </div>
  );
}

export default App;
