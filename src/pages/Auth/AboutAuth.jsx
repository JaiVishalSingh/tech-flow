import React from 'react'
import communityImage from '../../assets/community-image1.png'

const AboutAuth = () => {
  return (
    <div className="auth-container-1">
      <img src={communityImage} alt="Tech Flow Community" className="community-image" />
      <h1>Join the Tech Flow Community</h1>
      <p>Got stuck? Ask your questions, share your knowledge, and connect with like-minded tech enthusiasts.</p>
      <p>Whether you're a beginner or an experienced developer, Tech Flow is the perfect place to collaborate, learn, and grow together.</p>
      <p>Sign up now to start your journey and become a part of our thriving community!</p>
    </div>
  );
};

export default AboutAuth;
