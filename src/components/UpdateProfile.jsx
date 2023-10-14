import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
//import { updatePassword } from "firebase/auth";

const Update = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useNavigate();

    const { currentUser, updateEmail,updatepassword } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("passwords do not match");
        }

        const promises = []
        if(emailRef.current.value !== (currentUser && currentUser.email)){
            promises.push(updateEmail(emailRef.current && emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatepassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            history('/')
        }).catch(()=>{
            setError('failed to update account')
        }).finally(()=>{
            setLoading(false)
        })
        //promise or try-catch both can be used while fetching data
        // try {
        //     setError("");
        //     setLoading(true);
        //     // await signup(emailRef.current.value, passwordRef.current.value);
        //     history("/")
        // } catch {
        //     setError("failed to signUp");
        // }
        //setLoading(false);
    };

    return (
        <div>
            <Card>
                <Card.Body className="p-5">
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert varient="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser && currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className="mt-3">password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="leave blank to keep the same"/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label className="mt-3">password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="leave blank to keep the same"/>
                        </Form.Group>
                        <Button disabled={loading} className="w-10 py-2 mt-4" type="submit" >
                            Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link></div>
        </div>
    );
};

export default Update;
