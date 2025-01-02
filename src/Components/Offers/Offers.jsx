import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './offer.scss';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch offers data from backend API
    axios.get('http://localhost:5000/api/offers')
      .then(response => {
        setOffers(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <section className="offers section container">
      <div className="secContainer">
        <div className="secHeader">
          <h2 className="secTitle">Featured Rental Offers</h2>
          <p className="secSubtitle">Find your perfect rental property from our curated selection of the best offers available.</p>
        </div>

        <div className="offersContent">
          {offers.map(offer => (
            <div className="offerCard" key={offer._id}>
              <div className="offerImage">
                <img src={offer.imageSrc} alt={offer.title} />
              </div>
              <div className="offerDetails">
                <h3 className="offerTitle">{offer.title}</h3>
                <p className="offerLocation"><strong>Location:</strong> {offer.location}</p>
                <p className="offerPrice"><strong>Price:</strong> {offer.price}</p>
                <p className="offerDescription">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
