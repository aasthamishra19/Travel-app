import React from 'react';
import './home.scss';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                        Plan your trip with us
                    </h1>

                    <button className="btn">
                        Explore Now
                    </button>
                </div>

                <div className="homeCard grid">
                    <div className="locationDiv">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" placeholder="Dream Destination" />
                    </div>

                    <div className="distDiv">
                        <label htmlFor="distance">Distance</label>
                        <input type="text" id="distance" placeholder="20 meters" />
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Price</label>
                        <input type="text" id="price" placeholder="$140-$500" />
                    </div>

                    <button className="btn">Search</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
