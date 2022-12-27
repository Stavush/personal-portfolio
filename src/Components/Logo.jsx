import React from "react";
import "./Logo.css";
//import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Logo = () => {
  return (
    <section className="logo">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi! I am Stav - a `}
              <span className="wrap"></span>
            </h1>
            <p>
              I am a self-taught programmer and an alumna of the first
              full-stack development certification program by Monday-U
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              id="welcome-img"
              src={
                "https://www.kindpng.com/picc/m/4-41514_developer-png-transparent-png.png"
              }
              alt="welcome image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Logo;
