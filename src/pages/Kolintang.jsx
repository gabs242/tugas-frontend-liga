import React from "react";
import Kolintang from "../assets/Kolintang.png";

function KolintangPage() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-bold"> KOLINTANG </h2>
            </div>

            <div class="w-max mx-auto">
                <img src={Kolintang} alt="" className=" w-[200px] py-1" />
            </div>
            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Kolintang adalah alat musik pukul tradisional minahasa dari Sulawesi utara, Indonesia yang terdiri dari bilah-bilah kayu yang disusun berderet dan dipasang di atas sebuah bak kayu. Kolintang biasanya dimainkan secara ansambel. Kolintang dalam masyarakat minahasa digunakan untuk mengiringi upacara adat, tari, menyanyi, dan bermusik.

            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Pada tahun 2013, Alat musik kolintang dari suku minahasa, Sulawesi utara diakui sebagai warisan budaya tak benda Indonesia oleh kementrian Pendidikan dan kebudayaan Indonesia.

            </p>

        </div>

    );
}

export default KolintangPage;