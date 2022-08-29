import "./contact.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImage from "../../assets/img/Mail-sent.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdateHandler = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const submitFormHandler = async (e) => {
    e.preventDefault();
    setButtonText("Sendig...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="alein-item-center">
          <Col md={6}>
            <img src={ContactImage} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Contact Us</h2>
            <form className="form" onSubmit={submitFormHandler}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onClick={(e) =>
                      onFormUpdateHandler("firstName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onClick={(e) =>
                      onFormUpdateHandler("lastName", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Please enter your email address"
                    onClick={(e) =>
                      onFormUpdateHandler("email", e.target.value)
                    }
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="phone"
                    value={formDetails.phone}
                    placeholder="Please enter your phone number"
                    onClick={(e) =>
                      onFormUpdateHandler("phone", e.target.value)
                    }
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Please enter your message"
                    onClick={(e) =>
                      onFormUpdateHandler("message", e.target.value)
                    }
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
