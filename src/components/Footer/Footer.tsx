import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../MailChimpForm/MailchimpForm";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/navIcon1.svg";
import navIcon2 from "../../assets/img/navIcon2.svg";
import navIcon3 from "../../assets/img/navIcon3.svg";
import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <MailchimpForm />
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/company/nasa"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://www.facebook.com/NASAWebb/"><img src={navIcon2} alt="Icon" /></a>
            <a href="https://www.instagram.com/nasawebb"><img src={navIcon3} alt="Icon" /></a>
          </div>
          <p>Copyright 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
