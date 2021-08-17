import React, { useContext, useState } from 'react';
import { DataContext } from '../../../App';

const ContentCard = (props) => {
    const [geo, setGeo] = useContext(DataContext)
    const seeLoction = (name) => {
        setGeo(name);
    }
    return (
        <div className='col-md-4'>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.geocontent.properties.name}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" onClick={() => seeLoction(props.geocontent)} class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;