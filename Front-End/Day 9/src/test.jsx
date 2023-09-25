import { Height } from '@mui/icons-material';
import React from 'react';
import ph from './Assets/images/ph.jpg';
import Footer from './Footer';

function Test() {
  const divStyle = {
    height: '100vh',
    backgroundColor: 'white',
    padding: '30px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  return (
    <div style={containerStyle}>
      <div style={divStyle}>
        <h3 style={{ color: 'black' }}>"User Insights."</h3>
        <h1 style={{ fontFamily: 'Verdana, sans-serif' }}>
          We value each piece of information, every report, and all the interactions our users have with our application. It is through this collaboration that we can maintain a strong defense against spam, phishing attempts, and unwanted digital intrusions.
        </h1>
        <h3 style={{ color: 'black' }}>Why Spam Guard ?</h3>
        <h1 style={{ fontFamily: 'Verdana, sans-serif' }}>
          Spam guard is not just a feature; it's a commitment to providing you with a secure, enjoyable, and clutter-free online experience. Together with our users, we can create a digital space that is free from unwanted intrusions, scams, and disruptions. Thank you for being part of our community, and we're here to ensure your online experience is the best it can be.
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Test;
