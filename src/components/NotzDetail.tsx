import { Card, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ResultNotzAndBlogs } from "../interfaces/ResultsNotzAndBlogs";

const NotzDetail = () => {
  const params = useParams();
  const [objNotz, setObjNotz] = useState<null | ResultNotzAndBlogs>(null);

  const fetchNotz = async () => {
    const URL = `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`;

    try {
      const response = await fetch(URL);

      if (response.ok) {
        const parseBody = await response.json();
        console.log(parseBody);
        setObjNotz(parseBody);
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
      {objNotz ? (
        <div>
          <Card>
            <Card.Img
              variant="top"
              src={objNotz.image_url}
              style={{
                maxHeight: "295px",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <Card.Body>
              <Card.Title>{objNotz.title}</Card.Title>
              <Card.Text>{objNotz.summary}</Card.Text>
              {/* <Card.Text>{objNotz.published_at.toLocaleDateString()}</Card.Text> */}
              <Card.Text>{objNotz.news_site}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default NotzDetail;
