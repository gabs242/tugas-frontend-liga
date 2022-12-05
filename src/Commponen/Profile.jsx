import React from "react";



const Profile = ({name, imgIg, imgFb, imgWa, imgEmail, ig, fb, wa, email}) => {
    return (

<div>
        <div>
            <div className="py-4">
                <p className="text-[14px] md:text-[22px]">{name}</p>
            </div>

        <div class=" flex space-x-2">
                <div className="py-2 space-y-4">
                    <img src={imgIg} alt="" className="w-[18px]"/>
                    <img src={imgFb} alt="" className="w-[18px]"/>
                    <img src={imgWa} alt="" className="w-[18px]"/>
                    <img src={imgEmail} alt=""  className="w-[18px]"/>
                </div>
            
                <div className="text-[12px] space-y-1 md:text-[20px]"> 
                    <p>{ig}</p>
                    <p>{fb}</p>
                    <p>{wa}</p>
                    <p>{email}</p>
                </div>
        </div>
    </div>
</div>

    );
};

export default Profile;