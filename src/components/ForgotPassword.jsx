import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./Context/AuthContext";
import { Link} from "react-router-dom";

const ResetPassword = () => {
    const emailRef = useRef();

    const { resetpassword } = useAuth();

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const [message,setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetpassword(emailRef.current.value);
            setMessage('check your inbox for furthur instructions')
        } catch {
            setError('failed to reset')
        }

        setLoading(false);
    }

    return (
        <div>
            <Card>
                <Card.Body className="p-5">
                    <h2 className="text-center mb-4">Log In</h2>

                    {error && <Alert varient="danger">{error}</Alert>}
                    {message && <Alert varient="success">{message}</Alert>}

                    <Form onSubmit={handleSubmit}>

                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                        <Button className="w-10 py-2 mt-4" type="submit" disabled={loading}>
                            Reset Password
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login"> Log In</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ResetPassword;
