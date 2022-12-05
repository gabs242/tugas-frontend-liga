import React from "react";
import Button from "./button";

const Budaya = ({ img, name, type, adress }) => {
    return (

        <div class="flex space-x-4 py-8 w-max mx-auto">
            <div>
                <img src={img}
                    alt=""
                    class="md:w-[260px]" />
            </div>

            <div class="text-white font-[Red Hat Display]">
                <p class="font-semibold text-[16px] md:text-[40px]">{name}</p>
                <p class="text-[14px] md:text-[32px]">{type}</p>
                <p class="text-[12px] md:text-[28px]">{adress}</p>
                <Button />
            </div>
        </div>

    );
};

export default Budaya;