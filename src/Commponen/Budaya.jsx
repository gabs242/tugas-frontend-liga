import React from "react";
import Kabasaran from "../assets/kabasaran 1.png";
import { Link } from "react-router-dom";


const Budaya = ({ img, id }) => {
    return (
        <div className="bg-[#FFFFFF] m-6 w-max mx-auto">
            <div className=" mr-5 ml-5">

                <img src={img} alt="" class="md:w-[260px] " />
                <Link to={`/detail/${id}`}>
                    <button className="bg-[#696969] font-regular text-white rounded-t-x4 m-2 rounded x-8">selengkapnya</button>
                </Link>

            </div>
            
        </div>




    )
}

export default Budaya;