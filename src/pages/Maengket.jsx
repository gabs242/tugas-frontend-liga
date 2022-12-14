import React from "react";
import Maengket from "../assets/Maengket.png";

function MaengketPage() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-bold"> MAENGKET </h2>
            </div>

            <div class="w-max mx-auto">
                <img src={Maengket} alt="" className=" w-[200px] py-1" />
            </div>
            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Maengket atau Tari Maengket Adalah tari tradisional suku Minahasa (orang Sulawesi Utara) yang dari Zaman dulu kala sampai saat ini masih berkembang. Tari Maengket sudah ada ditanah Minahasa sejak rakyat Minahasa mengenal pertanian. Tarian maengket dilakukan pada saat sedang panen hasil pertanian dengan gerakan-gerakan sederhana. Sekarang tarian Maengket telah berkembang teristimewa bentuk dan tarinya tanpa meninggalkan keasliannya. Kata maengket terdiri dari awalan ma dengan kata dasar engket. Kata ma berarti sedang melaksanakan dan engket artinya mengangkat tumit naik turun sesuai lagu.

            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Maengket sudah ada di tanah Minahasa sejak rakyat Minahasa mengenal pertanian terutama menanam padi di ladang. Kalau dulu nenek moyang Minahasa, Maengket hanya dimainkan pada waktu panen padi dengan gerakan-gerakan yang hanya sederhana. Maengket ini dipentaskan dengan disertai nyanyian dan diiringi gendang atau tambur serta hanya dipertunjukan dalam dalam upacara tertentu seperti Makamberu, Metabak, Masambo, Melaya dan Meraba.
            </p>

        </div>

    );
}

export default MaengketPage;