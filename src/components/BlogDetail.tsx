import { Card, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResultNotzAndBlogs } from "../interfaces/ResultsNotzAndBlogs";

const BlogDetail = () => {
  const params = useParams();
  const [objBlog, setObjBlog] = useState<null | ResultNotzAndBlogs>(null);

  const fetchNotz = async () => {
    const URL = `https://api.spaceflightnewsapi.net/v4/blogs/${params.id}`;

    try {
      const response = await fetch(URL);

      if (response.ok) {
        const parseBody = await response.json();
        console.log(parseBody);
        setObjBlog(parseBody);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchNotz();
  }, []);

  return (
    <>
      {objBlog ? (
        <Col xs={6} md={4} xl={3}>
          <Card>
            <Card.Img
              variant="top"
              src={objBlog.image_url}
              style={{
                maxHeight: "295px",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <Card.Body>
              <Card.Title>{objBlog.title}</Card.Title>
              <Card.Text>{objBlog.summary}</Card.Text>
              {/* <Card.Text>{objBlog.published_at.toLocaleDateString()}</Card.Text> */}
              <Card.Text>{objBlog.news_site}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default BlogDetail;
