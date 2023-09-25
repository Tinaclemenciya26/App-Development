import React from 'react';
import './Assets/CSS/Policy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-content">
        At SPAM GUARD, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services.
      </p>

      <h2 className="section-title">Information We Collect</h2>
      <p className="privacy-policy-content">
        - <strong>Personal Information:</strong> When you register or use our services, we may collect your name, email address, and other relevant contact information.
        <br />
        - <strong>Usage Data:</strong> We collect information about your interaction with our services, such as your device information, IP address, browser type, and usage patterns.
      </p>

      {/* Other sections of your privacy policy go here */}
      
      <p className="privacy-policy-content">
        By using SPAM GUARD's services, you agree to the terms outlined in this Privacy Policy.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
