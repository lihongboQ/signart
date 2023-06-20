"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sign from "./Sign";
import Products from "./Products";
import SchoolRoll from "./SchoolRoll";
import Specialize from "./Specialize";
import Slogan from "./Slogan";
import SignCharacteristic from "./SignCharacteristic";
import ServiceSystem from "./ServiceSystem";
import BusinessPartner from "./BusinessPartner";
import OurTeam from "./OurTeam";
// import StudentWorks from "./StudentWorks";
import Disc from "./Disc";
import AboutUs from "./AboutUs";
import { useState } from "react";


export default function Homepage() {
  const [value, setValue] = useState<number>(0)
  const [characteristicType, setCharacteristicType] = useState<number>(0)
  const [scrollTop, setScrollTop] = useState<number>(0)
  console.log("🚀 ~ file: index.tsx:24 ~ Homepage ~ scrollTop:", scrollTop)
  return (
    <div className="relative h-screen overflow-auto"
      onScroll={
        (e: any) => {
          setScrollTop(e.target.scrollTop)
          if (value === 1) {
            e.target.scrollTop = 1848
          }
          if (characteristicType === 1 || characteristicType === 2) {
            e.target.scrollTop = 6550
          }
        }}>
      <div className="relative h-full">
          <Header />
          <Sign />
          <Products value={value} setValue={setValue} />
          <SchoolRoll />
          <Specialize />
          <ServiceSystem />
          <OurTeam />
          <SignCharacteristic characteristicType={characteristicType} setCharacteristicType={setCharacteristicType} />
          <AboutUs />
          {/* <StudentWorks /> */}
          <Disc />
          <BusinessPartner />
          <Slogan />
          <Footer />
      </div>
    </div>
  );
}
