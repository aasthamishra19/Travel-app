import React from 'react';
import './popular.scss';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";

import image from '../../image.jpg';
import image2 from '../../image2.jpg';
import image3 from '../../image3.jpg';
import image4 from '../../image4.jpg';
import image5 from '../../image5.jpg';

const data = [
    {
        id: 1,
        imagesrc: image2,
        destTitle: 'Machu-Pichu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
    },
    {
        id: 2,
        imagesrc: image3,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
    },
    {
        id: 3,
        imagesrc: image4,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
    },
    {
        id: 4,
        imagesrc: image5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
    },
    {
        id: 5,
        imagesrc: image,
        destTitle: 'BigBen',
        location: 'London',
        grade: 'CULTURAL RELAX',
    }
];

const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular Destinations
                        </h2>
                        <p className="secSubtitle">Explore the world’s most sought-after spots.</p>
                    </div>
                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon rightIcon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {data.map((item) => (
                        <div className="singleDestination" key={item.id}>
                            <div className="destImage">
                                <img src={item.imagesrc} alt={item.destTitle} className="img-responsive" />
                                <div className="overlayInfor">
                                    <h3 className="overlayTitle">{item.destTitle}</h3>
                                    <p className="overlayLocation">{item.location}</p>
                                    <BsArrowRightShort className="icon overlayIcon" />
                                </div>
                            </div>

                            <div className="destFooter flex">
                                <div className="number">
                                    {String(item.id).padStart(2, '0')}
                                </div>

                                <div className="destText flex">
                                    <h6 className="destTitle">{item.destTitle}</h6>
                                    <span className="flex">
                                        <span className="dot">
                                            <BsDot className="icon" />
                                        </span>
                                        {item.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Popular;
