import React from 'react';
import '../styles/ActiveContribution.css';
import redHat from "../assets/images/redhut-logo.png"
import asyncLogo from "../assets/images/async-logo.png"
const ActiveContributions = () => {
  const companies = [
    {
      name: 'RedHat',
      logo:redHat,
      alt: 'RedHat Logo'
    },
    {
      name: 'DigitalOcean',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg',
      alt: 'DigitalOcean Logo'
    },
    {
      name: 'Asyncio',
      logo: asyncLogo,
      alt: 'Asyncio Logo'
    },
    
    {
      name: 'RedHat',
      logo: redHat,
      alt: 'RedHat Logo'
    },
    {
      name: 'DigitalOcean',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg',
      alt: 'DigitalOcean Logo'
    },
    {
       name: 'Asyncio',
      logo: asyncLogo,
      alt: 'Asyncio Logo'
    }
  ];

  // Duplicate array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="active-contributions">
      <div className="contributions-container">
        <h2 className="contributions-title">ACTIVE CONTRIBUTIONS</h2>
        
        <div className="logos-wrapper">
          <div className="logos-container">
            {duplicatedCompanies.map((company, index) => (
              <div key={`${company.name}-${index}`} className="logo-item">
                <img 
                  src={company.logo} 
                  alt={company.alt}
                  className="company-logo"
                />
                {/* <span className="company-name">{company.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveContributions;