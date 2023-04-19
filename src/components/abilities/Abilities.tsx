import "./abilities.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fgs from "../../assets/img/fgs.png";
import Nircam from "../../assets/img/Nircam.png";
import NIRSpec from "../../assets/img/NIRSpec.png";
import miri from "../../assets/img/miri.png";

export const Abilities = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="abilities" id="abilities">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="abilities-bx wow zoomIn">
              <h2>My Abilities</h2>
              <p>
                The Integrated Science Instrument Module (ISIM) is a framework
                that provides electrical power, computing resources, cooling
                capability as well as structural stability to the Webb
                telescope. It is made with bonded graphite-epoxy composite
                attached to the underside of Webb's telescope structure. The
                ISIM holds the four science instruments and a guide camera.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme abilities-slider"
              >
                <div className="item">
                  <img src={Nircam} alt="" />
                  <h5>NIRCam</h5>
                </div>
                <div className="item">
                  <img src={NIRSpec} alt="" />
                  <h5>NIRSpec</h5>
                </div>
                <div className="item">
                  <img src={miri} alt="" />
                  <h5>MIRI</h5>
                </div>
                <div className="item">
                  <img src={fgs} alt="" />
                  <h5>FGS/NIRISS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={BackSharp} alt="" /> */}
    </section>
  );
};
