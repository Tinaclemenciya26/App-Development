import React from 'react';
import './Assets/CSS/Home.css'
import ResponsiveAppBar from './nav';

function Homepage() {
  return (
    <div className="homepage">
    <ResponsiveAppBar/>
    <img src="C:\Users\tinac\Downloads\istockphoto-1289803387-170667a.jpg" alt=""></img>
      <h5>SPAM GUARD:The spam free environment</h5>
      
      <h1> Welcome to Spam Guard, your trusted email companion designed to enhance your email experience. 
      Say goodbye to the hassle of sorting through unwanted spam messages and the worry of falling for phishing scams. 
      Spam Guard is here to simplify your message management and keep your inbox safe and clutter-free. </h1>
     
    </div>
  );
}

export default Homepage;
