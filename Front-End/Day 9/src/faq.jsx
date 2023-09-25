import React from 'react';
import './Assets/CSS/faq.css';

const faq = () => {
  const faqData = [
    {
      question: 'What is Spam Guard?',
      answer: 'Spam Guard is a trusted email companion designed to protect you from unwanted spam messages and phishing scams.'
    },
    {
      question: 'How does Spam Guard work?',
      answer: 'Spam Guard uses advanced algorithms to automatically identify and flag spam content in your email inbox.'
    },
    {
      question: 'Is Spam Guard free?',
      answer: 'Yes, Spam Guard offers a free version with basic features. Premium plans with additional benefits are also available.'
    },
    {
      question: 'How can I install Spam Guard?',
      answer: 'You can install Spam Guard as an email extension or app depending on your email service provider. Installation instructions are available in our documentation.'
    },
    {
      question: 'Is my data safe with Spam Guard?',
      answer: 'We take data privacy seriously. Your data is securely handled. Please refer to our Privacy Policy for more details.'
    },
    {
      question: 'Where can I get support?',
      answer: 'For support and additional information, visit our website or contact our support team at support@spamguard.com.'
    }
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default faq;
