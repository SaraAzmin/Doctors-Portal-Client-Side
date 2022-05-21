import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl ${bgClass}`}>
                <figure className='lg:pl-5 mt-4 md:mt-0'>
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InfoCard;