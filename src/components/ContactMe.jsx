import React from "react";
import { Container, Form, Button, FloatingLabel, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const schema = z.object({
    name: z
        .string()
        .trim()
        .nonempty({ message: "Name is required" })
        .min(5, { message: "minimum of 5 characors required" }),
    email: z
        .string()
        .nonempty({ message: "Email is required" })
        .email()
        .trim()
        .toLowerCase(),
    inquiry: z.string().nonempty({ message: "Select Atleast one Option" }),
    request: z.string().min(25, { message: "Minimum of 25 charactors required" })
});

export default function Hook() {
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors, isSubmitted, isValid }
    } = useForm({
        resolver: zodResolver(schema)
    });

    const [show, setShow] = useState(false);

    const handleClose = () => { setShow(false); reset(); }

    const onSubmit = () => console.log("");

    const handleSub = () => {
        if (isValid) {
            setShow(true);
        }
        if (!(isValid)) {
            setShow(false);
        }
    }

    return (
        <Container id="contact" className="mt-5 mb-5 pt-5 pb-5 text-center">

            <Form className="mt-5 pt-5 pb-5" onSubmit={handleSubmit(onSubmit)}>

                <Col className="mx-auto mt-5 mb-5 pb-5 pt-5" md={{ span: 7, offset: 3 }}>
                    <h1 className="mt-5 mb-5 text-dark">Contact Me</h1>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control
                            type="name"
                            placeholder="Full Name"
                            {...register("name", { required: "Name Required" })}
                        />
                        {errors.name?.message && (
                            <Form.Text className="text-danger">
                                {errors.name?.message}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email Required" })}
                        />
                        {errors.email?.message && (
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Select
                            aria-label="Default select example"
                            type="inquiry"
                            {...register("inquiry", {
                                required: "Select Atleast one"
                            })}
                        >
                            <option value="">Select reason for reaching out</option>
                            <option value="Web-Dev-Role">Web-Dev Job Proposal</option>
                            <option value="Internship">Internship Proposal </option>
                            <option value="Freelance">Freelance Project Proposal</option>
                            <option value="Consultancy">Open source consultancy role</option>
                        </Form.Select>
                        {errors.inquiry?.message && (
                            <Form.Text className="text-danger">
                                {errors.inquiry?.message}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <FloatingLabel controlId="floatingTextarea2" className="text-dark" label="Comments here">
                        <Form.Control
                            as="textarea"
                            {...register("request")}
                            placeholder="Leave a inquiry here"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>
                    {errors.request?.message && (
                        <Form.Text className="text-danger">
                            {errors.request?.message}
                        </Form.Text>
                    )}
                    <br />

                    {/* <Button className="mt-4" type="submit" >Submit</Button> */}
                    <>
                        <Button type="submit" variant="primary" onClick={handleSub}>
                            Submit Form
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Hello There {getValues("name")}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Thanks for stopping by, I'll review your message and get back to you as soon as i can.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </Col>
            </Form>
        </Container>
    );
}
