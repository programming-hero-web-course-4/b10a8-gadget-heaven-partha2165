import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";


const DetailsPage = () => {
    document.title = "Details | Gadget Heaven";
    const { id } = useParams();
    const p_id = parseInt(id);
    const data = useLoaderData();
    const product = data.find(product => product.id === p_id);
    const { img, title, price, stock, desc, spec, rating } = product;
  
   

    return (
        <div className="">
            {/* Heading */}
            <div className="bg-[#9538E2] pb-56 md:pb-32">
                <div className="text-center py-10 md:w-3/5 w-4/5 mx-auto space-y-4">
                    <h3 className="font-bold text-white md:text-2xl text-xl">Product Details</h3>
                    <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            {/* Main */}
            <div className="md:-mt-32 -mt-56 bg-[#ECECEC] w-4/5 mx-auto rounded-xl md:flex-row flex-col gap-4 flex p-8 items-center justify-evenly">
                {/* Image */}
                <div className="">
                    <img src={img} alt={title} className="rounded-xl w-96" />
                </div>
                {/* Details */}
                <div className="">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-xl mt-2 font-semibold">$ {price}</p>
                    <p className={`py-1 text-center mt-2 px-2 w-[150px] rounded-lg ${stock ? 'bg-[#00f80c38]' : 'bg-[#fa000054]'}`}>
                        {stock ? "In Stock" : "Not In Stock"}
                    </p>
                    <p className="mt-4">{desc}</p>
                    <h3 className="mt-4 font-medium text-xl">Specifications:</h3>
                    <ul className="list-disc list-inside">
                        {spec.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="mt-4 flex gap-1 text-xl">{rating} <FaRegStar className="text-xl" /></p>
                    <div className="flex gap-4 items-center mt-4">
                        <button 
                           
                        >
                            Add To Cart <FaOpencart className="text-xl" />
                        </button>
                        <button
                            
                        >
                            <GiSelfLove />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
