import * as React from 'react';
import { useState, useEffect } from 'react';
import MapGL from 'react-map-gl';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ'; // Set your mapbox token here



const Map = () => {
    // const coordinates = [-27.4575887, -58.99029]; //[lon, lat]
    // const radius = 100; // in meters
    // const options = { numberOfEdges: 32 }; //optional, that defaults to { numberOfEdges: 32 }
    
    // let polygon = circleToPolygon(coordinates, radius, options);
    const [viewport, setViewport] = useState({
        latitude: 48.01027395282483,
        longitude: -89.59940914585667,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });
    
    

    return (
        <MapGL
            {...viewport}
            width="100%"
            height="100%"
            padding='5px'
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      
    );
};

export default Map;