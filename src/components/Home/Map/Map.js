import * as React from 'react';
import { useState, useEffect } from 'react';
import MapGL, { FlyToInterpolator, GeolocateControl, Layer, LinearInterpolator, Marker, Source, WebMercatorViewport } from "react-map-gl";

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ'; // Set your mapbox token here

const geolocateControlStyle = {
    right: 10,
    top: 10
};
const layerStyle = {
    id: 'point',
    type: 'fill',
    source: "my-data",
    paint: {
        'fill-color': "red",
        'fill-opacity': 0.4
    }
};

const Map = () => {
    const [geoData, setGeoData] = useState({})

    useEffect(()=>{
        fetch("https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson")
        .then(res => res.json())
        .then(data => setGeoData(data.features[2]))
    }, [])

    // const na = geoData.geometry.coordinates;
    // console.log(geoData);

    const [viewport, setViewport] = useState({
        latitude: 37.78,
        longitude: -122.41,
        zoom: 14,
        center: [-77.0214, 38.897],
        bearing: 0,
        pitch: 0
    });

    const goToSF = () => {
        
      };

    return (
        <MapGL
            {...viewport}
            width="100%"
            height="100%"
            padding='5px'
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}

        >
            <Source id="my-data" type="geojson" data={geoData}>
                <Layer {...layerStyle} />
            </Source>
            <button onClick={goToSF}>Click here</button>
        </MapGL>
        // <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>

        // </ReactMapGL>

    );
};

export default Map;