import React, { useEffect } from "react";
import { trackEvent } from "../facebookPixel"; // Import Meta Pixel tracking
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  // Track "InitiateCheckout" when page loads
  useEffect(() => {
    trackEvent("InitiateCheckout", {
      content_name: "Led Strip for TV - 10 Million colors | 5 Meters",
      content_category: "Electronics",
      content_ids: ["led-strip-5m"],
      value: 1499.00, // Total price
      currency: "INR",
    });
  }, []);

  return (
    <Container className="mt-4">
      {/* Header */}
      <h4 className="fw-bold">Elements Products</h4>

      <Row>
        {/* Left Section - Contact & Delivery Form */}
        <Col md={7}>
          <h5 className="mt-3">Contact</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email or mobile phone number" />
            </Form.Group>
            <Form.Check type="checkbox" label="Email me with news and offers" />

            <h5 className="mt-3">Delivery</h5>
            <Form.Group className="mb-3">
              <Form.Label>Country/Region</Form.Label>
              <Form.Control as="select">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </Form.Control>
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Control type="text" placeholder="First name" />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Last name" />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Apartment, suite, etc. (optional)" />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Control type="text" placeholder="City" />
              </Col>
              <Col>
                <Form.Control as="select">
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="PIN code" />
              </Col>
            </Row>

            <Form.Check type="checkbox" label="Save this information for next time" />
          </Form>
        </Col>

        {/* Right Section - Order Summary */}
        <Col md={5} className="bg-light p-3">
          <div className="d-flex align-items-center mb-3">
            <Image 
              src="https://elementsproducts.store/cdn/shop/files/Untitled_1080_x_1080_px_1.png?v=1741285829&width=713" 
              width="60" height="60" rounded className="me-2" 
            />
            <div>
              <p className="mb-0">Led Strip for TV - 10 Million colors | 5 Meters</p>
              <strong>₹1,499</strong>
            </div>
          </div>

          <p>Subtotal: ₹1,499</p>
          <p>Shipping: <span className="text-muted">Enter shipping address</span></p>
          <h5>Total: <strong>₹1,499</strong></h5>

          <Button variant="dark" className="w-100 mt-3" onClick={() => navigate("/success")}>
            Complete Purchase
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
