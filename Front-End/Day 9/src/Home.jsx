import React from 'react';
import './Assets/CSS/Home.css'
import ResponsiveAppBar from './nav';
import Footer from './Footer';
import Test from './test';




function Homepage() {
  return (
    <div className="homepage">
    <ResponsiveAppBar/>
    
      <h5>SPAM GUARD </h5>
      
      <h3>"Phish-Free Zone: Choose Spam Guard."</h3>
      
      <h1> Welcome to Spam Guard, your trusted email companion designed to enhance your email experience. 
      Say goodbye to the hassle of sorting through unwanted spam messages and the worry of falling for phishing scams. 
      Spam Guard is here to simplify your message management and keep your inbox safe and clutter-free. We are excited to introduce our latest feature Spam Guard. With Spam Guard, 
      we extend our protection beyond your inbox. Our app ensures that you stay safe from spam and phishing attempts
      even when you're on the go.
      
      </h1>
      
      <h3>"Flags Spam Automatically."
      </h3>
      <h1>
      Our app is equipped with a sophisticated feature that automatically identifies and flags spam content, ensuring a seamless and secure experience for our users. This automated system utilizes advanced algorithms and pattern recognition to swiftly detect any content that exhibits characteristics commonly associated with spam, such as unsolicited advertisements, phishing attempts, or irrelevant messages.</h1>
      
     
      
      
      
      
      <Test/>
    </div>
  );
}

export default Homepage;
