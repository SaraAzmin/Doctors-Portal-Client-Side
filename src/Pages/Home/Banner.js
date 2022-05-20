import React from 'react';
import chair from '../../assets/images/chair.png';
import SharedButton from '../Shared/SharedButton'

const Banner = () => {
    return (
        <div class="hero md:min-h-screen mr-10 md:mr-0 my-5 md:my-0">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="min-w-sm lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-2xl md:text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p class="py-3 md:py-6 lg:pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <SharedButton>Get Started</SharedButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;