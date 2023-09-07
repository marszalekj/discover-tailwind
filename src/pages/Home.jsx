import Card from "../components/Card";
import React from "react";
import { useState, useEffect } from 'react';

export default function Home() {
  const [crypto, setCrypto] = useState([]);

  const getData = () => {
    fetch("https://data.binance.com/api/v3/ticker/24hr")
      .then((response) => response.json())
      .then((data) => setCrypto(data));
      
  };

  useEffect(() => getData(), []);

  

  return (
    <div className="container  mx-auto flex flex-wrap justify-center">
      <div className="flex flex-wrap p-10 w-[1240px] h-auto bg-neutral-100 rounded-[25px] justify-center">     
        <div className="flex flex-wrap justify-around">
      {  crypto.map((data) => (
        
          <Card data={data} key={data.symbol}/> ))
          
        }
        
        </div>
      </div>
    </div>
  );
}
