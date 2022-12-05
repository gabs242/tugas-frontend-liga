import React from "react";
import RumahAdat from "../assets/Rumah.png";

function RumahAdatPage() {
    return (
        <div className="bg-[#696969]">
            <div>
                <h2 className="text-white text-center font-bold"> RUMAH ADAT WALEWANGKO</h2>
            </div>

            <div class="w-max mx-auto">
                <img src={RumahAdat} alt="" className=" w-[200px] py-1" />
            </div>
            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Rumah adat Walewangko merupakan rumah adat suku Minahasa yang tinggal di Sulawesi Utara.
                Dikenal juga dengan sebutan rumah pewaris, rumah adat ini berbentuk rumah panggung yang tiang penopangnya terbuat dari kayu yang kuat.
            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Rumah adat Sulawesi Utara atau masyarakat Minahasa ini dahulu dibuat dengan teknik ikat, yaitu menempel pada pohon yang tinggi. Rumah adat ini tidak lagi diikat di pohon, melainkan dibuat panggung.
            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Rumah Wale sangat mudah dikenali karena memiliki ciri khas tersendiri yang membedakannya dengan rumah adat daerah lain. Ciri yang menonjol dari Rumah Wale terletak pada bentuknya yang simetris pada fasad bangunan. Bentuk simetris Rumah Wale diperkuat dengan adanya dua buah tangga di bagian depan pintu masuk. Uniknya lagi, arah dua anak tangga itu saling berlawanan, yaitu dari sisi kanan dan sisi kiri rumah. Konon, tangga yang didesain saling berlawanan itu memiliki makna tersendiri bagi masyarakat Minahasa.
            </p>

            <p class="text-white mx-auto w- mt-7 text-justify px-2">
                Tujuannya tak lain untuk menangkal roh jahat, yang apabila hendak masuk dari satu sisi tangga, maka dia akan kembali turun dari sisi tangga satunya.
                Selain itu, banyaknya anak tangga juga tidak sembarangan.
                Pasalnya, jumlah anak tangga ini mencerminkan tingkat jumlah harta untuk mempelai wanita
            </p>

        </div>

    );
}

export default RumahAdatPage;