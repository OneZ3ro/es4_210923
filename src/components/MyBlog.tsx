import { Card, Button, Col } from "react-bootstrap";
import { ResultNotzAndBlogs } from "../interfaces/ResultsNotzAndBlogs";

interface MyBlogProps {
  myBlog: ResultNotzAndBlogs;
}

const MyBlog = ({ myBlog }: MyBlogProps) => {
  console.log(myBlog);
  return (
    <Col xs={6} md={4} xl={3}>
      <Card>
        <Card.Img
          variant="top"
          src={myBlog.image_url}
          style={{
            maxHeight: "295px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
        <Card.Body>
          <Card.Title>{myBlog.title}</Card.Title>
          <Card.Text>{myBlog.summary}</Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default MyBlog;
