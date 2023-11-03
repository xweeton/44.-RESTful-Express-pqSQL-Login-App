import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { UserDataContext } from "../UserDataContext";
import { useContext } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContext);

  function goProfile() {
    navigate("/profile");
  }

  return (
    <Container className="text-center">
      <NavBar />
      <h1 className="my-5">Dashboard</h1>
      <h2>Welcome, <span className="text-primary">{userData}</span>!</h2>
      <Card>
        <Card.Body>
          <Card.Title>Sigma School Analytics</Card.Title>
          <Card.Text>People who graduate who get jobs: 80%</Card.Text>
        </Card.Body>
      </Card>
      <Button className="mt-3" variant="warning" onClick={goProfile}>
        Go to Profile
      </Button>
    </Container>
  );
}
