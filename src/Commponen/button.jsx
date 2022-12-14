import React from "react";
import { Link } from "react-router-dom";

const Button = ({ id }) => {
    return (
        <div className="text-white font-[Red Hat Display]">
            <div >
                <p className="font-semibold text-[16px] md:text-[40px]">Kabasaran</p>
                <p className="text-[14px] md:text-[32px]">Tarian</p>
                <p className="text-[12px] md:text-[28px]">Minahasa</p>
            </div>
            <div>
                <Link to={`/selengkapnya/${id}`}>
                    <button className="bg-[#696969] text-white text-[12px] px-4 md:px-10 text-left rounded-lg md:text-[28px]">Selengkapnya</button>
                </Link>

            </div>

        </div>
    )

}

export default Button;