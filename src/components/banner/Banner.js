import "./banner.css";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../../assets/img/webb.png";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Science", "Technology", "Engineering" ];
  const [text, setText] = useState(" ");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{"Hi! I'm James Webb!"}</h1>
                  <span
                      className="txt-rotate"
                      data-rotate='[ "Science", "Technology", "Engineering, Arts,and Math" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  <p>
                    I im the largest telescope ever launched into space. In the
                    ~2 weeks after launch, i unfolds from its compact launch
                    configuration into its operational configuration which is
                    nearly the size of a tennis court. From that point, i moves
                    through its commissioning phases leading up to the release
                    of it's first images. Explore the entire process
                    interactively and explore status updates, videos, blogs and
                    more as it goes through each step.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div className="imgheader">
                  <img src={headerImg} alt="Header Img" />
                </div>
              </Col>
        </Row>
      </Container>
    </section>
  );
};
