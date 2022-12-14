import React from "react";
import Wujud from "../assets/wujud-budaya 1.png";

function AboutPage() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-semibold text-[25px]"> About </h2>
            </div>

            <div class="w-max mx-auto spase-y-10 flex-auto">
                <img src={Wujud} alt="" className=" w-[200px] py-1" />
            </div>

            <p class="text-white mx-auto mt-7 text-justify px-2">
                Budaya adalah suatu cara hidup yang berkembang dan dimiliki bersama oleh sekelompok orang, serta diwariskan dari generasi ke generasi. Budaya terbentuk dari banyak unsur yang rumit, termasuk sistem agama dan politik, adat istiadat, bahasa, perkakas, pakaian, bangunan, dan karya seni. Bahasa, sebagaimana juga budaya, merupakan bagian yang tak terpisahkan dari diri manusia sehingga banyak orang cenderung menganggapnya diwariskan secara genetis.
            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Aplikasi ini berguna untuk membantu masyarakat untuk mencarikan informasi tentang budaya dan adat yang ada di sulawesi utara. Hal itu membuat masyarakat Indonesia mengenal budaya dan adat . Informasi budaya sangat penting untuk diketahui oleh warga negara Indonesia baik di luar daerah maupun daerah itu sendiri, terkadang masyarakat di daerah itu sendiri bahkan tidak mengetahui budaya mereka sendiri apalagi daerah luar.

            </p>


        </div>

    );
}

export default AboutPage;