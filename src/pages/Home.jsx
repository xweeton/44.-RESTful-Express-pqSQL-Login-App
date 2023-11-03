import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 text-center">
      <img src="https://picsum.photos/id/9/300/200" />
      <h1 className="mt-4">Welcome Home!</h1>
      <Button variant="secondary" className="mt-3" onClick={() => navigate("/login")}>
        Go to Login
      </Button>
      <Button variant="warning" className="mt-3 ms-2" onClick={() => navigate("/signup")}>
        Go to Signup
      </Button>
    </Container>
  );
}
