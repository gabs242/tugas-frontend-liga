import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../Commponen/Card";


const Selengkapnya = () => {
  const { id } = useParams();
  const [budaya, setbudaya] = useState("");

  const getbudaya = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/budaya/${id}`);
      setbudaya(response.data);
      console.log(budaya)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getbudaya();
  }, []);

  return (
    <Card
      id={budaya.id}
      nama={budaya.nama_budaya}
      jenis={budaya.jenis_budaya}
      tempat_budaya={budaya.tempat_budaya}
      deskripsi={budaya.deskripsi}
      img={budaya.url}

    />
  );
};

export default Selengkapnya;