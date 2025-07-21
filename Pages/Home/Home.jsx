import React, { useRef, useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import bg_desktop from "../../src/assets/images/background-desktop.png";
import bg_mobile from "../../src/assets/images/background-mobile.png";
import bg_tablet from "../../src/assets/images/background-tablet.png";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Form from "../../Components/Form/Form";
import Wrapper from "../../Components/Wrapper/Wrapper";

const Home = () => {
  return (
   <Wrapper bg_desktop={bg_desktop}>
     <Navbar/>
     <Hero/>
     <Form/>
   </Wrapper>
  );
};

export default Home;
