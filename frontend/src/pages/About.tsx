import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>

      <Header />
      <Navbar />
      <div className="h-screen">
      {/* <h1 className="text-4xl">About</h1> */}
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-20">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comic
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      แนวร้าน "Comic Craze Shop" คือร้านการ์ตูนและการ์ตูนออนไลน์ที่รวบรวมการ์ตูนที่ยอดเยี่ยมจากทั่วโลกเพื่อขายและแบ่งปันความรักในการ์ตูน 
      ร้านของเรามีเนื้อหาการ์ตูนและอุปกรณ์ที่เกี่ยวข้องให้คนรักการ์ตูนเพื่อสนุกและสร้างสรรค์กับเรื่องราวที่พวกเขารัก.
      </p>
      </div>
    </>
  );
};

export default About;
