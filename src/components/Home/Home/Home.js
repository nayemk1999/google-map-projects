import React, { useEffect } from 'react';
import Content from '../Content/Content';
import { data } from '../data';
import Header from '../Header/Header/Header';
import Map from '../Map/Map';

const Home = () => {
    const geo = data.features

    // fetch(
    //     "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson"
    //     )
    //     .then((response) => response.json())
    //     .then((geojson) => console.log(geojson))
   
    return (
        <>
            <Header/>
            <Content/>
        </>
    );
};

export default Home;