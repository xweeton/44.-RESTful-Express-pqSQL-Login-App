import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { UserDataContext } from "../UserDataContext";


const API_URL = 'https://auth-back-end-zeph-goh.sigma-school-full-stack.repl.co';


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const userDataContext = useContext(UserDataContext);

  async function fetchUserDetails() {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const response = await fetch(`${API_URL}/username`, {
          method: 'GET',
          headers: {
            'Authorization': `${token}`,
          },
        });

        if (response.ok) {
          // Handle received user data
          const userData = await response.json();
          // set username to UserDataContext
          userDataContext.setUserData(userData.username);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }


  async function login() {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the received token in localStorage
        localStorage.setItem('token', data.token);
        // Update the token in your AuthContext or use local storage/cookies
        authContext.setToken(data.token); // Assuming your AuthContext has a function setToken to store the token
        navigate("/dashboard");

        // Fetch user details after a successful login
        await fetchUserDetails();
      } else {
        // Handle unsuccessful login (e.g., show error message)
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle general error scenarios
    }
  }

  return (
    <Container className="my-5">
      <h1>Login Your Account</h1>
      <Form onSubmit={(e) => {
        e.preventDefault();
        login();
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
          Login
        </Button>
        <Link to="/signup" className="ms-2">No account yet? Register here</Link>

      </Form>
    </Container>
  );
}
