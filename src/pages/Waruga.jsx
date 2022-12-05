import React from "react";
import Waruga from "../assets/Waruga.png";

function Warugapage() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-bold"> WARUGA </h2>
            </div>

            <div class="w-max mx-auto">
                <img src={Waruga} alt="" className=" w-[200px] py-1" />
            </div>
            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Waruga adalah kuburan kuno orang Minahasa yang terbuat dari dua batu berbentuk segitiga dan kotak. Keberadaannya memberitahukan tentang kebudayaan manusia di Minahasa pada masa lampau serta perkembangan teknologinya. Waruga awalnya digunakan sebagai tempat penguburan dan pelaksanaan ritual kematian dalam kepercayaan animisme dan dinamisme serta sebagai perlambang seni masyarakat Minahasa. Pada masa kini, waruga dijadikan sebagai objek wisata pendidikan dan kebudayaan.
            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Waruga berasal dari bahasa Tombulu yaitu kata wale dan ruga. Wale berarti rumah, sedangkan ruga berarti hancur atau terbongkar. Penamaan ini didasari oleh bentuk waruga yang menyerupai rumah dan fungsinya adalah sebagai rumah penghancur jasad Waruga memiliki ornamen yang beragam dengan motif utamanya yaitu manusia, tanaman, hewan, dan bentuk geometri. Motif berupa manusia diukir dengan berbagai peristiwa kehidupannya, seperti melahirkan, menari dan berpakaian.

            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Kompleks waruga banyak ditemukan di Kabupaten Minahasa Utara. Pada awalnya, waruga tersebar hampir di seluruh wilayah Minahasa. Pada tahun 1817, waruga disatukan menjadi kompleks di beberapa tempat.
            </p>

        </div>

    );
}

export default Warugapage;