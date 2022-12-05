import React from "react";
import { Link, NavLink } from "react-router-dom";
import Peta from "../assets/Peta.png";
import Wujud from "../assets/wujud-budaya 1.png";
import Grup from "../assets/Group 1.png";
import Kabasaran from "../assets/kabasaran 1.png";
import Masamper from "../assets/Masamper.png";
import Maengket from "../assets/Maengket.png";
import Maselai from "../assets/Maselai.png";
import Kolintang from "../assets/Kolintang.png";
import MusikBambu from "../assets/MusikBambu.png";
import RumahAdat from "../assets/Rumah.png";
import Waruga from "../assets/Waruga.png";
import Profile from "../Commponen/Profile";
import Instagram from "../assets/ig.png";
import Facebook from "../assets/fb.png";
import Whatsapp from "../assets/wa.png";
import Email from "../assets/email.png";
import Button from "../Commponen/button";






function Home() {
   
    const rowFour = [{ name: "Gabriel Tumewu", imgIg: Instagram, imgFb: Facebook, imgWa: Whatsapp, imgEmail: Email, ig: "g_tumewu", fb: "Gabriel Tumewu", wa: "082124714475", email: "tumewujibril@gamil.com" }]
    const rowFive = [{ name: "Rivelino Lisan", imgIg: Instagram, imgFb: Facebook, imgWa: Whatsapp, imgEmail: Email, ig: "linolisan_", fb: "Rivelino Lisan", wa: "081244713632", email: "rivelinolisan@gamil.com" }]

    return (

        <div>
            <div>
                <img src={Peta} alt="Peta" className="md:w-[200px] mx-auto w-max" />
                <img src={Wujud} alt="wujud-budaya 1" className="w-[320px] md:w-[640px] mx-auto" />
                <img src={Grup} alt="Grup" className="md:w-[550px] mx-auto w-max py-8" />
                <p className="text-[#00000] font-bold font-[Red Hat Display] text-[25px] text-center md:text-[46px]"> “Sulawesi Utara adalah salah satu Provinsi di Indonesia yang memiliki berbagai jenis suku dan budaya.”</p>
            </div>

            <div class="bg-[#2D2828] m-6 md:m-14 rounded-t-xl">
               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={Kabasaran} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Kabasaran</p>
                    <p class="text-[14px] md:text-[32px]">Tarian</p>
                    <p class="text-[12px] md:text-[28px]">Minahasa</p>
                    <Link to='./kabasaran'>
                        <Button/>
                    </Link>
                </div>
               </div>

               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={Masamper} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Masamper</p>
                    <p class="text-[14px] md:text-[32px]">Tarian</p>
                    <p class="text-[12px] md:text-[28px]">Minahasa</p>
                    <Link to='./Masamper'>
                        <Button/>
                    </Link>
                </div>
               </div>

               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={Maengket} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Maengket</p>
                    <p class="text-[14px] md:text-[32px]">Tarian</p>
                    <p class="text-[12px] md:text-[28px]">Minahasa</p>
                    <Link to='./Maengket'>
                        <Button/>
                    </Link>
                </div>
               </div>

               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={Maselai} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Maselai</p>
                    <p class="text-[14px] md:text-[32px]">Tarian</p>
                    <p class="text-[12px] md:text-[28px]">Sangihe</p>
                    <Link to='./Maselai'>
                        <Button/>
                    </Link>
                </div>
               </div>                

            </div>

            <div class="bg-[#2D2828] m-6 md:m-14">
               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={Kolintang} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Kolintang</p>
                    <p class="text-[14px] md:text-[32px]">Alat Musik</p>
                    <p class="text-[12px] md:text-[28px]">Minahasa</p>
                    <Link to='./Kolintang'>
                        <Button/>
                    </Link>
                </div>
               </div>

               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={MusikBambu} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Musik Bambu</p>
                    <p class="text-[14px] md:text-[32px]">Alat Musik</p>
                    <p class="text-[12px] md:text-[28px]">Minahasa</p>
                    <Link to='./MusikBambu'>
                        <Button/>
                    </Link>
                </div>
               </div>
            </div>

            <div class="bg-[#2D2828] m-6 md:m-14 rounded-b-xl">
               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={RumahAdat} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Rumah Adat</p>
                    <p class="text-[14px] md:text-[32px]">Bangunan</p>
                    <p class="text-[12px] md:text-[28px]">Minahasa</p>
                    <Link to='./RumahAdat'>
                        <Button/>
                    </Link>
                </div>
               </div>

               <div class="flex space-x-4 py-8 w-max mx-auto">
                <div>
                    <img src={Waruga} alt="" class="md:w-[260px]"/>
                </div>

                <div class="text-white font-[Red Hat Display]">
                    <p class="font-semibold text-[16px] md:text-[40px]">Waruga</p>
                    <p class="text-[14px] md:text-[32px]">Bangunan</p>
                    <p class="text-[12px] md:text-[28px]">Minahasa</p>
                    <Link to='./Waruga'>
                        <Button/>
                    </Link>
                </div>
               </div>
            </div>

            <div className="bg-[#696969] flex justify-between px-2 md:px-10">
                <div className="text-white">
                    {
                        rowFour.map((item) => (
                            <Profile name={item.name} imgIg={item.imgIg} imgFb={item.imgFb} imgWa={item.imgWa} imgEmail={item.imgEmail} ig={item.ig} fb={item.fb} wa={item.wa} email={item.email} />
                        ))
                    }
                    
                </div>

                <div className="text-white">
                    {
                        rowFive.map((item) => (
                            <Profile name={item.name} imgIg={item.imgIg} imgFb={item.imgFb} imgWa={item.imgWa} imgEmail={item.imgEmail} ig={item.ig} fb={item.fb} wa={item.wa} email={item.email} />
                        ))
                    }
                
                </div>
            </div>

            <div className="bg-[#2D2828]">
                <p className="text-[#8B8BA5] text-center text-[8px] md:text-[12px]">All Rights Reserved Culture by A from LIGA 2022</p>
            </div>

        </div>


    );
}

export default Home;



