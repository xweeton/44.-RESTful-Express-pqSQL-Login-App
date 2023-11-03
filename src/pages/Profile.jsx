import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import NavBar from "../components/NavBar";

export default function Dashboard() {
  return (
    <Container className="text-center">
      <NavBar />
      <h1 className="my-5">Profile</h1>
      <Card>
        <Card.Body>
          <Card.Title>Account Details</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet.
          </Card.Text>
          <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              fuga.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
