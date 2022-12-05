import React from "react";
import Masamper from "../assets/Masamper.png";

function MasamperPage() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-bold"> MASAMPER </h2>
            </div>

            <div class="w-max mx-auto">
                <img src={Masamper} alt="" className=" w-[200px] py-1" />
            </div>
            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Masamper adalah kesenian tradisional masyarakat Noorder Einlanden dalam bahasa Belanda yang berarti pulau-pulau lebih utara atau populer disebut Nusa Utara, atau Sangihe, Talaud dan Sitaro di Sulawesi Utara. Masamper merupakan kegiatan bernyanyi bersama-sama secara berkelompok dan saling berbalas-balasan nyanyian.

            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Kesenian Masamper merupakan grup seni bernyanyi yang memadukan dua unsur utama, yaitu vokal dan sentuhan geraka harus seirama, disertai dengan gerak tari dari si pembawa lagu (pengaha) dalam tradisi Masamper, tidaklah sekadar menyanyi bersama anggota.

            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Pada zaman dahulu, sebelum masuknya agama Kristen dan Islam, masyarakat suku sangihe talaud sudah memiliki tradisi menyanyi. Pada masa itu, masyarakat menganut kepercayaan animisme, sehingga menyanyi yang di gunakan pada saat upacara pemujaan, di adakan untuk dewa.
            </p>
        </div>

    );
}

export default MasamperPage;