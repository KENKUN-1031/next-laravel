import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from 'react';

// const inter = Inter({ subsets: ["latin"] });

interface TestData{
  //ここで受け取るデータの型を決めてる
  id: number;
  name: string;
}

export default function Home() {
  const [data, setData] = useState<TestData[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/get-data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <main>
      <h1>Your Next.js App</h1>
      <ul>
        {/*下の書き方はとってきたデータがリストの時にmapを使って一個づつ表示する*/}
        {data.map(item => (
            <p key={item.id}>{item.name}</p>
        ))}
      </ul>
      {/* Add your other components, styling, or whatever you need */}
    </main>
  );
}
