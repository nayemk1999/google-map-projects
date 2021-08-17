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
    type: 'line',
    source: "my-data",
    paint: {
        'line-color': 'red',
        'line-width': 2
    }
};

const Map = () => {
    const [geoData, setGeoData] = useState({})

    useEffect(() => {
        fetch("https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson")
            .then(res => res.json())
            .then(data => setGeoData(data.features[3]))
    }, [])

    const multiType = geoData.geometry?.coordinates[0][0]
    const polyType = geoData.geometry?.coordinates

    const [viewport, setViewport] = useState({
        latitude: 48.01027395282483,
        longitude: -89.59940914585667,
        zoom: 1,
        center: [-77.0214, 38.897],
        bearing: 0,
        pitch: 0
    });

    const goToSF = (event) => {

        if (polyType.length === 1) {
            const vp = new WebMercatorViewport(viewport);
            const { longitude, latitude } = vp.fitBounds(
                polyType[0],
                {
                    padding: 40
                }
            );

            setViewport({
                ...viewport,
                longitude,
                latitude,
                zoom: 4,
                transitionDuration: 2000,
                transitionInterpolator: new FlyToInterpolator(),
            });
        }
        else {
            const vp = new WebMercatorViewport(viewport);
            const { longitude, latitude } = vp.fitBounds(
                multiType,
                {
                    padding: 40
                }
            );

            setViewport({
                ...viewport,
                longitude,
                latitude,
                zoom: 4,
                transitionDuration: 2000,
                transitionInterpolator: new FlyToInterpolator(),
            });
            // alert('please try again................')
        }

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

    );
};

export default Map;