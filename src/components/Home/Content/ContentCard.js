import React, { useContext, useState } from 'react';
import { DataContext } from '../../../App';

const ContentCard = ({ index, geocontent }) => {
    console.log(geocontent);
    const { name, region_big, abbrev, admin } = geocontent.properties
    const [tooltipShow, setTooltipShow] = useState(false);
    const [geo, setGeo] = useContext(DataContext)
    const openLeftTooltip = () => {
        setTooltipShow(true)
    };
    const closeLeftTooltip = () => {
        setTooltipShow(false);
    };

    const seeLoction = (name) => {
        setGeo(name);
    }
    return (
        <a href='#' className='no-underline' onClick={() => seeLoction(geocontent)} onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
        >
            <div class=" bg-white max-w-xs shadow-xl mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-60 cursor-pointer" >
                {/* <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>Some Nice Tooltip Text</span> */}
                <div class="bg-indigo-500  flex h-20  items-center">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full" >{index}</h1>
                    <p class="ml-4 text-white uppercase">{name}</p>
                </div>
                {/* <p class="py-6 px-6 text-lg tracking-wide text-center">Description Goes here</p> */}
                <div className={(tooltipShow ? "visible" : "invisible ")}>
                    <div className="bg-pink-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-center no-underline break-words rounded-lg">
                        <>
                            <div
                                className=
                                "bg-pink-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                            >
                                {region_big}
                            </div>
                            <div className="text-white p-1">
                                <p>Abbrev: {abbrev}</p>
                                <p>Admin: {admin} </p>
                            </div>
                        </>
                    </div>
                </div>

                {/* 

                <div class="flex justify-center px-5 mb-2 text-sm ">
                    <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        Details
                    </button>
                </div> */}
            </div>
        </a>
    );
};

export default ContentCard;