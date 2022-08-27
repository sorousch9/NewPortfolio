import { Col } from "react-bootstrap";

export const MissionCard = ({ title, description, imgUrl })  => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="mission-imgbx">
        <img src={imgUrl} alt=""/>
        <div className="mission-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
