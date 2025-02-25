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

  const value = "";
  useEffect(() => {
    const postData = async () => {
      const response = await axios.post("http://localhost:9999", {
        value: JSON.stringify(value),
      });
      console.log(response);
    };
    postData();
  }, []);
  const putValue = "putted data";
  useEffect(() => {
    const putData = async () => {
      const response = await axios.put("http://localhost:9999", {
        putValue: JSON.stringify(putValue),
      });
      console.log(response);
    };
    putData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>admin web</p>{" "}
    </div>
  );
}
