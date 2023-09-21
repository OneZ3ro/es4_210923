import { useEffect, useState } from "react";
import MyNotz from "./MyNotz";
import { ResultNotzAndBlogs } from "../interfaces/ResultsNotzAndBlogs";
import { Row } from "react-bootstrap";
import MyBlog from "./MyBlog";

const MyMain = () => {
  const [arrNotz, setArrNotz] = useState<ResultNotzAndBlogs[]>([]);
  const [arrBlogs, setArrBlogs] = useState<ResultNotzAndBlogs[]>([]);

  const fetchNotz = async () => {
    const URL = "https://api.spaceflightnewsapi.net/v4/articles";

    try {
      const response = await fetch(URL);

      if (response.ok) {
        const parseBody = await response.json();
        console.log(parseBody.results);
        setArrNotz(parseBody.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlogs = async () => {
    const URL = "https://api.spaceflightnewsapi.net/v4/blogs/";

    try {
      const response = await fetch(URL);

      if (response.ok) {
        const parseBody = await response.json();
        console.log(parseBody.results);
        setArrBlogs(parseBody.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotz();
    fetchBlogs();
  }, []);

  return (
    <div className="d-flex flex-column gap-4 mt-5 px-5">
      <h1>Benvenuto a Notzs</h1>
      <div>
        <h4>Ecco le notizie di oggi</h4>
        <Row className="flex-nowrap" style={{ overflowX: "scroll" }}>
          {arrNotz.map((mynotz) => (
            <MyNotz mynotz={mynotz} key={`notz-${mynotz.id}`} />
          ))}
        </Row>
      </div>
      <div>
        <h4>Ecco alcuni blog che potrebbero piacerti</h4>
        <Row className="flex-nowrap" style={{ overflowX: "scroll" }}>
          {arrBlogs.map((myBlog) => (
            <MyBlog myBlog={myBlog} key={`notz-${myBlog.id}`} />
          ))}
        </Row>
      </div>
    </div>
  );
};
export default MyMain;
