import React, { useEffect, useState } from "react";
import bg_desktop from "../../src/assets/images/background-desktop.png";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Navbar from "../../Components/NavBar/Navbar";
import logo_mark from "../../src/assets/images/logo-mark.svg";
import icon_github from "../../src/assets/images/icon-github.svg";
import pattern_ticket from "../../src/assets/images/pattern-ticket.svg";
import "./Ticket.css";
import { useLocation } from "react-router";

const Ticket = () => {
  const location = useLocation();

  const [data, setData] = useState({
    fullName: "Jonathan Kristoff",
    email: "JonathanKristoff@gmail.com",
    github: "Jonathakris1009",
    image: null,
  });

  const [ticketId, setTicketId] = useState(null);

  useEffect(() => {
    // Load form data
    if (location.state) {
      setData(location.state);
      localStorage.setItem("formData", JSON.stringify(location.state));
    } else {
      const saved = localStorage.getItem("formData");
      if (saved) {
        setData(JSON.parse(saved));
      }
    }

    // Load or generate ticket ID
    const savedId = localStorage.getItem("ticketId");
    if (savedId) {
      setTicketId(savedId);
    } else {
      const newId = Math.floor(Math.random() * 10000);
      localStorage.setItem("ticketId", newId);
      setTicketId(newId);
    }
  }, [location.state]);

  return (
    <Wrapper bg_desktop={bg_desktop}>
      <Navbar />
      <div className="tcontent-middle">
        <h1>
          Congrats, <span>{data.fullName}!</span> <br /> Your ticket is ready.
        </h1>
        <p>
          We have emailed your ticket to <br />
          <span>{data.email}</span> and will send updates in <br />
          the run-up to the event.
        </p>
      </div>

      <div className="ticket-pattern">
        <img src={pattern_ticket} alt="" className="pattern-ticket" />

        <div className="ticket-top">
          <img src={logo_mark} alt="" />
          <div className="tickettop-info">
            <h2>Coding Conf</h2>
            <p>Jan 31, 2025 / Austin, TX</p>
          </div>
        </div>

        <div className="social-info">
          {data.image && (
            <img src={data.image} alt="Avatar" className="image-avatar" />
          )}
          <div className="infos">
            <h3>{data.fullName}</h3>
            <p>
              <img src={icon_github} alt="GitHub" />
              {data.github}
            </p>
          </div>
        </div>

        <div className="ticket-no">
          <h3>{`#${ticketId}`}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Ticket;
