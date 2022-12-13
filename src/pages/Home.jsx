import React from "react";
import { Link, NavLink } from "react-router-dom";
import Peta from "../assets/Peta.png";
import Wujud from "../assets/wujud-budaya 1.png";
import Grup from "../assets/Group 1.png";
import Profile from "../Commponen/Profile";
import Instagram from "../assets/ig.png";
import Facebook from "../assets/fb.png";
import Whatsapp from "../assets/wa.png";
import Email from "../assets/email.png";
import Button from "../Commponen/button";
import Budaya from "../Commponen/Budaya";






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
                <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                    <Budaya/>
                    <Link to='./kabasaran'>
                        <Button/>
                    </Link>
                </div> 
               

                <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                    <Budaya/>
                    <Link to='./Maengket'>
                        <Button/>
                    </Link>
                </div>

                <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                    <Budaya/>
                    <Link to='./Masamper'>
                        <Button/>
                    </Link>
                </div>

                <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                    <Budaya/>
                    <Link to='./Maselai'>
                        <Button/>
                    </Link>
                </div>                

            </div>

            <div class="bg-[#2D2828] m-6 md:m-14">
                    <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                        <Budaya/>
                        <Link to='./Kolintang'>
                            <Button/>
                        </Link>
                    </div>     

                    <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                        <Budaya/>
                        <Link to='./MusikBambu'>
                            <Button/>
                        </Link>
                    </div>     
            </div>

            <div class="bg-[#2D2828] m-6 md:m-14 rounded-b-xl">
                <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                    <Budaya/>
                    <Link to='./RumahAdat'>
                        <Button/>
                    </Link>
                </div>     

                <div className="flex py-8 px-10 w-max mx-auto space-x-6">
                    <Budaya/>
                    <Link to='./Waruga'>
                        <Button/>
                    </Link>
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



