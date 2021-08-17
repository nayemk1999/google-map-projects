// import * as React from 'react';
// import {useState} from 'react';
// // import {render} from 'react-dom';
// import MapGL, {LinearInterpolator, WebMercatorViewport} from 'react-map-gl';
// import bbox from '@turf/bbox';

// const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ'; // Set your mapbox token here

// export default function Map2() {
//   const [viewport, setViewport] = useState({
//     latitude: 37.78,
//     longitude: -122.4,
//     zoom: 11,
//     bearing: 0,
//     pitch: 0
    
//   });

//   const onClick = event => {
//     const feature = event.features[0];
//     console.log('cliked');
//     if (feature) {
//       // calculate the bounding box of the feature
//       const [minLng, minLat, maxLng, maxLat] = bbox(feature);
//       // construct a viewport instance from the current state
//       const vp = new WebMercatorViewport(viewport);
//       const {longitude, latitude, zoom} = vp.fitBounds(
//         [
//           [minLng, minLat],
//           [maxLng, maxLat]
//         ],
//         {
//           padding: 40
//         }
//       );

//       setViewport({
//         ...viewport,
//         longitude,
//         latitude,
//         zoom,
//         transitionInterpolator: new LinearInterpolator({
//           around: [event.offsetCenter.x, event.offsetCenter.y]
//         }),
//         transitionDuration: 1000
//       });
//     }
//   };

//   return (
//     <>
//       <MapGL
//         {...viewport}
//         width="100%"
//         height="100%"
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         interactiveLayerIds={['sf-neighborhoods-fill']}
//         onClick={onClick}
//         onViewportChange={v => setViewport(v)}
//         mapboxApiAccessToken={MAPBOX_TOKEN}
//       />
//       {/* <ControlPanel /> */}
//     </>
//   );
// }
