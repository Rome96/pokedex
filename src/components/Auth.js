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
        <p className='errorMsg'>{errors.emailError}</p> <br/><br/>
        <label>Username</label>
        <input
          type='text'
          name='email'
          value={value.email}
          autoFocus
          required
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={value.password}
          required
          onChange={handleInputChange}
        />
        <div className='btnContainer'>
          {
            hasAccount ? (
              <>
                <button onClick={handleLogin}>Sing in</button>
                <p>
                  Don't have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>Sing up</span>
                </p>
              </>
            ) : (
              <>
                <button onClick={handleSignup}>Sing up</button>
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
