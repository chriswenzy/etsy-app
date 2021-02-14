import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Button, Form, Card, Row} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div `
.form-div{
    margin-top: 260px;
    position: absolute;
} 
`

export const Login = () => {
    return (
        <Styles>
           
            <Container fluid className="cover">
                
                <Container className="form-div">
                    <Row className="justify-content-md-center align-items-center">
                        <Col md={8}>
                        <Card className="shadow bg-white" >
                    <Card.Body>
                    <Form >
                    <Form.Group as={Col}  controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
            
                    </Form.Group>

                    <div className="text-center">
                        <Link to="/home">
                        <Button variant="success" size="lg">Login</Button>
                        </Link>
                    </div>

                    </Form>
                    </Card.Body>
                    </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </Styles>
    )
}