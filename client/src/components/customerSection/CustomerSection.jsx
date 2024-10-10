import React from 'react';
import './customerSection.css'; // Import the CSS file

const CustomerSection = () => {
  return (
    <header className="customer-section">
      <div className="container">
        <div className="container__left">
          <h1>Read what our customers love about us</h1>
          <p>
            Over 200 companies from diverse sectors consult us to enhance the
            user experience of their products and services.
          </p>
          <p>
            We have helped companies increase their customer base and generate
            multifold revenue with our service.
          </p>
          <button>Read our success stories</button>
        </div>
        <div className="container__right">
          <div className="card">
            <img src="./pic-1.jpg" alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  We had a great time collaborating with the Filament team. They
                  have my high recommendation!
                </p>
                <h4>- Marnus Stephen</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./pic-2.jpeg" alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  The team drastically improved our product's user experience &
                  increased our business outreach.
                </p>
                <h4>- Andrew Jettpace</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="./pic-3.jpg" alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CustomerSection;
