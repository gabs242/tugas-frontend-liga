import React from "react";
import Maselai from "../assets/Maselai.png";

function MaselaiPage() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-bold"> MASELAI </h2>
            </div>

            <div class="w-max mx-auto">
                <img src={Maselai} alt="" className=" w-[200px] py-1" />
            </div>
            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Tari Mesalai adalah salah satu tarian daerah Sulawesi Utara yang berasal dari kelompok budaya daerah Sangihe Talaud. Sejak abad ke 15 sampai dengan masa penjajahan Belanda, sistem pemerintahan di kepulauan Sangihe Talaud berada dibawah kekuasaan Raja-raja.

            </p>

            <p class="text-white mx-auto w- mt-7 text-justify [x-2">
                Tari Mesalai atau lasimnya disebut Mesalai, termasuk salah satu tarian yang diangkat ke istana. Tarian yang dulunya oleh masyarakat dijadikan sebagai sarana pemujaan dalam upacara penyembahan kepada Ghenggona (Tuhan) menjadi tarian istana dan diberi nama Tari Gunde. Penari-penari gunde terdiri dari putri-putri kaum bangsawan. Sedangkan Mesalai yang lahir di lingkungan rakyat biasa tetap menjadi milik rakyat.

            </p>

        </div>

    );
}

export default MaselaiPage;