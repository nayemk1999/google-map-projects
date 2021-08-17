import React from 'react';
import { data } from '../data';
import ContentCard from './ContentCard';

const Content = () => {
    const geoData = data.features

    return (
        <div className='row'>
            {
                geoData.map(geocontent => <ContentCard geocontent={geocontent}/>)
            }
        </div>
    );
};

export default Content;