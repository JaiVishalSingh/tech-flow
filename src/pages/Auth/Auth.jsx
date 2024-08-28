import React, { useState } from 'react';

import './Auth.css';
import icon from '../../assets/icon.png';
import AboutAuth from './AboutAuth';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section className="auth-section">
      { isSignup && <AboutAuth/>}
      <div className="auth-container-2">
        {!isSignup && <img src={icon} alt="tech flow" className="login-logo" />}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" />
          </label>

          <label htmlFor="password">
            <div style={{display:"flex" , justifyContent: "space-between"}}>
              <h4>Password</h4>
              {!isSignup && <p style={{color:"#9ba9ff" , fontSize: "13px" , marginTop:"12px"}}>Forgot password?</p>}
            </div>
            <input type="password" name="password" id="password" />
            {isSignup && <p style={{color: "#666666"}}>Password must contain at least 8 characters, including 1 uppercase letter and 1 number.</p>}
          </label>

          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{fontSize:"13px"}}>
                Opt-in to receive occasional, <br /> product updates, user research invitations,<br /> company announcements, and more.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
          {isSignup && (
            <p>
              By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button tabIndex={0} className="handle-switch-btn" onClick={handleSwitch}>
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
