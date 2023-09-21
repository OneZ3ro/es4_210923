import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";
import NotzDetail from "./components/NotzDetail";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/notz/:id" element={<NotzDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
