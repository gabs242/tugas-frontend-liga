import React from "react";

const Card = ({ img, id, deskripsi, nama_budaya, jenis_budaya, tempat_budaya }) => {
    return (
        <div class="text-center font-semibold">
            <img src={img} alt="" className="w-max mx-auto mt-4 " />
            <h1>{nama_budaya}</h1>
            <h1>{jenis_budaya}</h1>
            <h1>{deskripsi}</h1>

        </div>
    )
}

export default Card;