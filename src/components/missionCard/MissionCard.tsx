import { Col } from "react-bootstrap";

interface MissionCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  imgUrl,
}) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="mission-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="mission-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
export default MissionCard;
