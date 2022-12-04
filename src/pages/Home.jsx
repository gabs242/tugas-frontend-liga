import React from "react";
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
import Budaya from "../Commponen/Budaya";
import Profile from "../Commponen/Profile";
import Instagram from "../assets/ig.png"
import Facebook from "../assets/fb.png"
import Whatsapp from "../assets/wa.png"
import Email from "../assets/email.png"





function Home() {
    const rowOne = [{ img:Kabasaran, name: "Kabasaran", type: "Tarian", adress:"Minahasa"} , 
                        { img:Masamper, name: "Masamper", type: "Tarian", adress:"Minahasa"} ,
                        { img:Maengket, name: "Maengket", type: "Tarian", adress:"Minahasa"} ,
                        { img:Maselai, name: "Maselai", type: "Tarian", adress:"Sangihe"} ]

    const rowTwo = [{ img:Kolintang, name: "Kolintang", type: "Alat Musik", adress:"Minahasa"} , 
                        { img:MusikBambu, name: "Musik Bambu", type: "Alat Musik", adress:"Minahasa"} ]

    const rowThree = [{ img:RumahAdat, name: "Rumah Panggung", type: "Bangunan", adress:"Minahasa"} , 
                        { img:Waruga, name: "Waruga", type: "Bangunan", adress:"Minahasa"} ]
    const rowFour = [{name:"Gabriel Tumewu", imgIg:Instagram, imgFb:Facebook, imgWa:Whatsapp, imgEmail:Email, ig: "g_tumewu", fb:"Gabriel Tumewu", wa:"082124714475", email:"tumewujibril@gamil.com" }]
    const rowFive = [{name:"Rivelino Lisan", imgIg:Instagram, imgFb:Facebook, imgWa:Whatsapp, imgEmail:Email, ig: "linolisan_", fb:"Rivelino Lisan", wa:"081244713632", email:"rivelinolisan@gamil.com" }]

    return (

      <div>
            <div>
                <img src={Peta} alt="Peta" className="md:w-[200px] mx-auto w-max" />
                <img src={Wujud} alt="wujud-budaya 1" className="w-[320px] md:w-[640px] mx-auto w-max" />
                <img src={Grup} alt="Grup" className="md:w-[550px] mx-auto w-max py-8"/>
                <p className="text-[#00000] font-bold font-[Red Hat Display] text-[25px] text-center md:text-[46px]"> “Sulawesi Utara adalah salah satu Provinsi di Indonesia yang memiliki berbagai jenis suku dan budaya.”</p>
            </div>

            <div>
            <div className="bg-[#2D2828] m-6 md:m-14 rounded-t-xl">
                    {
                        rowOne.map((item)=>(
                            <Budaya img={item.img} name={item.name} type={item.type} adress={item.adress} />
                        ))
                    }
            </div>

            <div className="bg-[#2D2828] m-6 md:m-14">
                    {
                        rowTwo.map((item)=>(
                            <Budaya img={item.img} name={item.name} type={item.type} adress={item.adress} />
                        ))
                    }
            </div>

            <div className="bg-[#2D2828] m-6 md:m-14 rounded-b-xl">
                    {
                        rowThree.map((item)=>(
                            <Budaya img={item.img} name={item.name} type={item.type} adress={item.adress} />
                        ))
                    }
             </div>

            </div>

            <div className="bg-[#696969] flex justify-between px-2 md:px-10">
                <div className="text-white">
                    {
                            rowFour.map((item)=>(
                                <Profile name={item.name} imgIg={item.imgIg} imgFb={item.imgFb} imgWa={item.imgWa} imgEmail={item.imgEmail} ig={item.ig} fb={item.fb} wa={item.wa} email={item.email} />
                            ))
                    } 
                </div>

                <div className="text-white">
                    {
                            rowFive.map((item)=>(
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
  


