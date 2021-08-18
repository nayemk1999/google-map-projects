import React, { useEffect, useState } from 'react';
// import { data } from '../data';
import ContentCard from './ContentCard';

const Content = () => {
    const [geoData, setGeoData] = useState({})
    useEffect(()=>{
        fetch("https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson")
        .then(res => res.json())
        .then(data => setGeoData(data))
    }, [])
    const geoJsonData = geoData.features
    // console.log(geoJsonData);
    return (
        <div className='flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10'>
            {
                geoJsonData?.map((geocontent, index) => <ContentCard index ={index} key={index} geocontent={geocontent}/>)
            }
        </div>
    );
};

export default Content;