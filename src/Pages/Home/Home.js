import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='px-8 md:px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
        </div>
    );
};

export default Home;