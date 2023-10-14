import React, { useRef, useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useNavigate();

  const { login } = useAuth();

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value);
      history("/")
    } catch {
      setError('failed to Login')
    }

    setLoading(false);
  }

  return (
    <div>
      <Card>
        <Card.Body className="p-5">
          <h2 className="text-center mb-4">Log In</h2>

          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button className="w-10 py-2 mt-4" type="submit" disabled={loading}>
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password"> forgot password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Need an account <Link to="/signup">Sign Up</Link></div>
    </div>
  );
};

export default Login;
