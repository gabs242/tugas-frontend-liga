import React from "react";

const Budaya = ({img, name, type, adress}) => {
    return (

<div class="flex space-x-4 py-8 w-max mx-auto">
                  <div>
                      <img src={img}
                      alt="" 
                      class="md:w-[260px]"/>
                  </div>

                  <div class="text-white font-[Red Hat Display]">
                      <p class="font-semibold text-[16px] md:text-[40px]">{name}</p>
                      <p class="text-[14px] md:text-[32px]">{type}</p>
                      <p class="text-[12px] md:text-[28px]">{adress}</p>
                      <button class="bg-[#696969] text-[12px] px-4 md:px-10 text-left rounded-lg md:text-[28px]">Selengkapnya</button>
                  </div>  
</div>

    );
};

export default Budaya;