import React, { useState, useEffect } from "react";
import './services.css'

const Services = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    // Make an API request to retrieve service data from Amazon API
    // Example:
    fetch("https://api.example.com/amazon-service-data")
      .then((response) => response.json())
      .then((data) => setServiceData(data))
      .catch((error) => console.error("Error fetching service data:", error));
  }, []);

  return (
    <div>
           <div className="services-container">
           <h2> Amazon Services</h2>
      {serviceData && (
        <ul>
          {serviceData.map((service) => (
            <li key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="card">
        <p>Get your shopping done</p>
        <p>Feeling lucky today?</p>
        <a href="https://www.amazon.com/" className="amazon-link">Access Amazon</a>
      </div>
           </div>
     

      <div className="services-container">
  <h2>Home Depot Service</h2>
  {serviceData && (
        <ul>
          {serviceData.map((service) => (
            <li key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      )}
  <div className="card">
    <p>Get your shopping done at Home Depot</p>
    <p>Feeling lucky today?</p>
    <a href="https://www.homedepot.com/" className="homedepot-link">Access Home Depot</a>
  </div>
</div>

      <div className="services-container">
  <h2>Walmart Service</h2>
  {serviceData && (
        <ul>
          {serviceData.map((service) => (
            <li key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      )}
  <div className="card">
    <p>Get your shopping done at Walmart</p>
    <p>Feeling lucky today?</p>
    <a href="https://www.walmart.com/" className="walmart-link">Access Walmart</a>
  </div>
</div>
</div>

  );
};

export default Services;