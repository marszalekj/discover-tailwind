import React from 'react'
import { useState, useEffect,  } from 'react';
import { useParams, Navigate } from "react-router-dom"


 export default function Product() {

  


  const [crypto, setCrypto] = useState([]);

  const getData = () => {
    fetch("https://data.binance.com/api/v3/ticker/24hr/", {mode: 'no-cors', headers: {'Access-Control-Allow-Origin':'*'}})
      .then((response) => response.json())
      .then((data) => setCrypto(data));
  };
  useEffect(() => getData(), []);

 // utilisation de useParams afin d'afficher la page du logement conrrespondant a l'id    
 const { id } = useParams();
 console.log(id)
 // utilisation de la methode find afin de parcourir les logements et afficher les logements correspondant a l'id, sinon renvoie vers page erreur
 const datas = crypto.map((data) => data.symbol === id);

 if(!datas) {
     return <Navigate to="/404" />
 }




    return (
      <main>
      <div>
        <h2 className='font-bold text-xl mb-2 justify-center'>{datas.symbol}</h2>
      </div>
      </main>
    )
  }
