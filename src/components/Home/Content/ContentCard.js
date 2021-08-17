import React from 'react';

const ContentCard = (props) => {
    // console.log(props.geocontent.properties.name);
    console.log(props.geocontent.geometry.coordinates[0])
    return (
        <div className='col-md-4'>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.geocontent.properties.name}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;