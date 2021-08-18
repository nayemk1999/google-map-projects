import React, { useContext, useState } from 'react';
import { DataContext } from '../../../App';

const ContentCard = ({ key, geocontent }) => {
    // console.log('index number', key);
    const [tooltipShow, setTooltipShow] = useState(false);

    const openLeftTooltip = () => {
        setTooltipShow(true)
    };
    const closeLeftTooltip = () => {
        setTooltipShow(false);
    };
    const [geo, setGeo] = useContext(DataContext)
    const seeLoction = (name) => {
        setGeo(name);
    }
    return (
        <div onClick={() => seeLoction(geocontent)} onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
        >
            <div class=" bg-white max-w-xs shadow-xl mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-60 cursor-pointer" >
                {/* <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>Some Nice Tooltip Text</span> */}
                <div class="bg-indigo-500  flex h-20  items-center">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full" >1</h1>
                    <p class="ml-4 text-white uppercase">Title</p>
                </div>
                {/* <p class="py-6 px-6 text-lg tracking-wide text-center">Description Goes here</p> */}
                <div className={(tooltipShow ? "visible" : "invisible ")}>
                    <div className="bg-pink-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-center no-underline break-words rounded-lg">
                        <>
                            <div
                                className=
                                "bg-pink-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                            >
                                tooltip title
                            </div>
                            <div className="text-white p-3">
                                And here's some amazing content. It's very engaging. Right?
                            </div>
                        </>
                    </div>
                </div>



                <div class="flex justify-center px-5 mb-2 text-sm ">
                    <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        Details
                    </button>
                </div>



            </div>
        </div>
    );
};

export default ContentCard;