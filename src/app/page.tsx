"use client";

import Image from "next/image";

import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:9999");
      console.log(response);
    };
    getData();
  }, []);

  const value = "sda sda sda sda";
  useEffect(() => {
    const postData = async () => {
      const response = await axios.post("http://localhost:9999", {
        value: JSON.stringify(value),
      });
      console.log(response);
    };
    postData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>admin web</p>{" "}
    </div>
  );
}
