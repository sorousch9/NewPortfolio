import { Container, Row, Col, Tab } from "react-bootstrap";
import  "./missions.css"
import { MissionCard } from "../missionCard/MissionCard";
import bHImg from "../../assets/img/Stephan_s_Quintet_NIRCam_and_MIRI_imaging_article.png";
import cosmic from "../../assets/img/Cosmic_Cliffs_in_Carina_NIRCam_pillars.png";
import southern_Ring from "../../assets/img/Southern_Ring_Nebula_NIRCam_pillars.jpg";
import cartwheel from "../../assets/img/Cartwheel_Galaxy_NIRCam_and_MIRI_pillars.jpg";
import jupiter from "../../assets/img/Jupiter_showcases_aurorae_hazes_NIRCam_widefield_view_pillars.jpg";
import exoplanet from "../../assets/img/Exoplanet_WASP-39_b_NIRSpec_transit_light_curves_pillars.jpg";
// import BackSharp2 from "../../assets/img/BackSharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Missions  = () => {
    const missions = [
      {
        title: "Stephan’s Quintet",
        description: "Stars derive from, and contribute to, gas and dust in mass quantities, swirling around galaxies. The dust evolves over time and Webb can study nearby and dynamic interacting galaxies to see the dust in action. Now, scientists can get a rare look, in unprecedented detail, at how interacting galaxies are triggering star formation in each other and how the gas in these galaxies is being disturbed.",
        imgUrl: bHImg,
      },
      
      {
        title: "Cosmic Cliffs",
        description: "The new images showcase how Webb’s cameras can peer through cosmic dust, shedding new light on how stars form. Objects in earliest, rapid phases of star formation difficult to capture, but Webb’s extreme sensitivity, spatial resolution, and imaging capability can chronicle these elusive events.",
        imgUrl: cosmic,
      },
      {
        title: "Southern Ring",
        description: "This planetary nebula, an expanding cloud of gas that surrounds a dying star, is approximately 2,000 light years away. Here, Webb’s powerful infrared eyes bring a second dying star into full view for the first time. From birth to death as a planetary nebula, Webb can explore the expelling shells of dust and gas of aging stars that may one day become a new star or planet",
        imgUrl: southern_Ring,
      },
      {
        title: "Carina Nebula",
        description: "This galaxy formed as the result of a high-speed collision that occurred about 400 million years ago. The Cartwheel is composed of two rings, a bright inner ring and a colourful outer ring. Both rings expand outward from the centre of the collision like shockwaves.",
        imgUrl: cartwheel,
      },
      {
        title: "Jupiter",
        description: "With giant storms, powerful winds, auroras, and extreme temperature and pressure conditions, Jupiter has a lot going on. Now, NASA’s James Webb Space Telescope has captured new images of the planet. Webb’s Jupiter observations will give scientists even more clues to Jupiter’s inner life.  ",
        imgUrl: jupiter,
      },
      {
        title: "Exoplanet ",
        description: "A series of light curves from Webb’s Near-Infrared Spectrograph (NIRSpec) shows the change in brightness of three different wavelengths (colours) of light from the WASP-39 star system over time as the planet transited the star on 10 July 2022. A transit occurs when an orbiting planet moves between the star and the telescope, blocking some of the light from the star.",
        imgUrl: exoplanet,
      },
    ];
  

  return (    <section className="mission" id="missions">
  <Container>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Missions</h2>
            <p>NASA's James Webb Space Telescope has captured the first clear evidence for carbon dioxide in the atmosphere of a planet outside the solar system. This observation of a gas giant planet orbiting a Sun-like star 700 light-years away provides important insights into the composition and formation of the planet.</p>
            <Tab.Container id="missions-tabs" defaultActiveKey="first">
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      missions.map((mission, index) => {
                        return (
                          <MissionCard
                            key={index}
                            {...mission}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="secend">
                  <p>
                  The James Webb Space Telescope will find the first galaxies that formed in the early universe and peer through dusty clouds to see stars forming planetary systems
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>}
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
  {/* <img className="background-image-right" src={BackSharp2} alt="" /> */}
</section>
  )
}