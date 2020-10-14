import React from 'react'

const Auth = props => {
  const {
    value,
    errors,
    hasAccount,
    handleLogin,
    handleSignup,
    setHasAccount,
    handleInputChange,
  } = props;

  // const handleInputChange = ({ target }) => {
  //   handleInputChange({
  //     ...user,
  //     [target.name]: target.value,
  //   });
  // };

  return (
    <section className='login'>
      <div className='loginContainer'>
      <label>{hasAccount ? 'Login' : 'Register'}</label> <hr/> <br/>
        <p className='errorMsg'>{errors.emailError}</p> <br/> <br/>
        <label>Email</label>
        <input
          required
          autoFocus
          type='text'
          name='email'
          value={value.email}
          placeholder='example@email.com'
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          required
          type='password'
          name='password'
          value={value.password}
          placeholder='*********'
          onChange={handleInputChange}
        />
        <div className='btnContainer'>
          {
            hasAccount ? (
              <>
                <button className='button-login' onClick={handleLogin}>Sing in</button>
                <p>
                  Don't have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>Sing up</span>
                </p>
              </>
            ) : (
              <>
                <button className='button-login' onClick={handleSignup}>Sing up</button>
                <p>
                  Have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>Sing in</span>
                </p>
              </>
            )
          }
        </div>
      </div>
    </section>
  ); 
};

export default Auth;
