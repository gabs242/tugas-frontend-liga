import React from "react";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div class="px-2 py-2 bg-[#D1D1D1] flex justify-between md:px-6">
                <h1 class="text-[16px] font-[Red Hat Display] font-bold">MENGENAL BUDAYA</h1>
                <div>
                    <img src={Vector} alt="Vector" class="md:hidden" />
                    <nav class="hidden md:block md:text-[18px]">
                        <ul class="flex space-x-4 font-[inter]">
                            <Link to='./'>
                                Home
                            </Link>
                            About
                            <Link to='./kabasaran'>
                                Recomendation
                            </Link>

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;