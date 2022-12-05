import React from "react";
import Kabasaran from "../assets/kabasaran 1.png";

function KabasaranT() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-bold"> KABASARAN </h2>
            </div>

            <div class="w-max mx-auto">
                <img src={Kabasaran} alt="" className=" w-[200px] py-1" />
            </div>
            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Tarian ini merupakan tarian keprajuritan tradisional Minahasa, yang diangkat dari kata; Wasal, yang
                berarti ayam jantan yang dipotong jenggernya agar sang ayam menjadi lebih garang dalam bertarung.
            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Kata Kawasalan ini kemudian berkembang menjadi "Kabasaran" yang merupakan gabungan dua kata “Kawasal ni
                Sarian” “Kawasal” berarti menemani dan mengikuti gerak tari, sedangkan “Sarian” adalah pemimpin perang
                yang memimpin tari keprajuritan tradisional Minahasa.
            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Tari Kabasaran diiringi oleh suara tambur atau gong kecil. Alat musik seperti gong, tambur atau
                kolintang disebut "pa" "wasalen" dan para penarinya disebut kawasaran, yang menari dengan meniru gerakan
                dua yama jantan yang sedang bertarung, hampir mirip dengan tarian Cakalele dari Maluku.
            </p>

        </div>

    );
}

export default KabasaranT;