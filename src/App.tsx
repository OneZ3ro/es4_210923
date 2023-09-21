import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";
import NotzDetail from "./components/NotzDetail";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/notz/:id" element={<NotzDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
