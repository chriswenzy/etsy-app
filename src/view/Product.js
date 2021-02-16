import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Button,Navbar, Nav, ListGroup,Form, FormControl, Card, CardDeck, Row} from 'react-bootstrap';
import styled from 'styled-components';
import productImg from '../assets/img/Juice.jpg'


const Styles = styled.div `

.list-group-item{
    border: none;
    padding: .1rem 1rem;
}

.search-bar{
    width: 990px;
    border-radius: 20px;
    background: #EFEFEF;
} 

`

export const Product = () => {
    return (
        <Styles>
           
            
            <Navbar bg="white" expand="lg" className="p-4">
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Form inline>
                    <FormControl type="text" placeholder="Search for anything" className="search-bar"/>
                   
                    </Form>
                    </Nav>
                    <Link  to="/login" >
                    <Button variant="white" size="sm" className="m-3">Sign in</Button>
                    </Link>
                    <span><i className="fa fa-shopping-cart"></i></span>
                </Navbar.Collapse>
                </Navbar>

                <ListGroup horizontal>
                <ListGroup.Item>Holiday Shop</ListGroup.Item>
                <ListGroup.Item>Wedding & party</ListGroup.Item>
                <ListGroup.Item>Art & Collectibles</ListGroup.Item>
                <ListGroup.Item>Home & Living</ListGroup.Item>
                <ListGroup.Item>Craft Supplies</ListGroup.Item>
                <ListGroup.Item>Clothing & Shoes</ListGroup.Item>
                <ListGroup.Item>Toys & Entertainment</ListGroup.Item>
                <ListGroup.Item>Gifts & Gifts Cards</ListGroup.Item>
                </ListGroup>

                
                    <Container className="mt-5">
                        <Row>
                        <Col md={6}>
                        <Card.Img variant="top" src={productImg} />
                        </Col>

                        <Col md={6}>
                        <h3 className="product-title">Fashion cloths</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">460 reviews</span>
						</div>
						<p> Suspendisse quos? Tempus cras iure temporibus? Eu 
                            laudantium cubilia sem sem! Repudiandae et! Massa senectus 
                            enim minim sociosqu delectus posuere.</p>
						<h4>Current price: <span>$180</span></h4>
						
						<div className="action">
							<Button className="add-to-cart btn btn-default" type="button">Add to cart</Button>
							
						</div>
                        </Col>
                        </Row>

                    </Container>

                    <Container>
                        <Row>
                            <Col md={6}>
                            <h3>Insert your chat sdk here!!</h3>
                            </Col>
                        </Row>
                    </Container>
               
        </Styles>
    )
}