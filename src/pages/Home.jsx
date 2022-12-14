import React from 'react';
import Profile from '../Commponen/Profile';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Budaya from '../Commponen/Budaya';

const Beranda = () => {
    const [budaya, setbudaya] = useState([]);

    const getbudaya = async () => {
        const response = await axios.get("http://localhost:5000/budaya");
        setbudaya(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        getbudaya();
    }, []);

    return (
        <div>
            <h1 className='text-center m-4 font-bold text-lg'>“Sulawesi Utara adalah salah satu Provinsi  di Indonesia yang memiliki berbagai jenis suku dan budaya.”</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>


                {

                    budaya.map((item) => (
                        <Budaya
                            img={item.url}
                            id={item.id}
                            nama={item.nama}


                        />


                    )
                    )
                }
                <Profile />
            </div>
        </div>

    )

}

export default Beranda;