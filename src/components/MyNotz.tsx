import { Card, Button, Col } from "react-bootstrap";
import { ResultNotzAndBlogs } from "../interfaces/ResultsNotzAndBlogs";
import { useNavigate } from "react-router-dom";

interface MyNotzProps {
  mynotz: ResultNotzAndBlogs;
}

const MyNotz = ({ mynotz }: MyNotzProps) => {
  const navigate = useNavigate();
  console.log(mynotz);
  return (
    <Col xs={6} md={4} xl={3}>
      <Card>
        <Card.Img
          variant="top"
          src={mynotz.image_url}
          style={{
            maxHeight: "295px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
        <Card.Body>
          <Card.Title>{mynotz.title}</Card.Title>
          <Card.Text>{mynotz.summary}</Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate(`/notz/${mynotz.id}`)}
          >
            Learn more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default MyNotz;
