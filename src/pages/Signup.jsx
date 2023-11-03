import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const API_URL = 'https://auth-back-end-zeph-goh.sigma-school-full-stack.repl.co';


export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function signup() {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful signup
        console.log('Signup successful:', data.message);
        // You might redirect the user to the login page or perform other actions
        navigate("/login");
      } else {
        // Handle unsuccessful signup
        console.error('Signup failed:', data.error);
        // You can display an error message to the user or handle it accordingly
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle general error scenarios
    }
  }

  return (
    <Container className="my-5">
      <h1>Signup Your Account</h1>
      <Form onSubmit={(e) => {
          e.preventDefault();
          signup();
        }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="zeph@zeph.com"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="zeph"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
        <Link to="/login" className="ms-2">Have account already? Login here</Link>
      </Form>
    </Container>
  );
}
