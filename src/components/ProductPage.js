import React, { useState, useEffect } from "react";
import { trackEvent } from "../facebookPixel"; // Import Meta Pixel tracking
import { Container, Row, Col, Button, Image, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ProductPage = () => {
  const navigate = useNavigate();
  
  // State to manage the selected media (image or video)
  const [selectedMedia, setSelectedMedia] = useState({
    type: "image",
    src: "https://elementsproducts.store/cdn/shop/files/Untitled_1080_x_1080_px_1.png?v=1741285829&width=713"
  });

  // Track "ViewContent" when page loads
  useEffect(() => {
    trackEvent("ViewContent", {
      content_name: "Led Strip for TV - 10 Million colors | 5 Meters",
      content_category: "Electronics",
      content_ids: ["led-strip-5m"],
      value: 1499.00, // Discounted price
      currency: "INR",
    });
  }, []);

  // Handle "AddToCart" tracking
  const handleBuyNow = () => {
    trackEvent("AddToCart", {
      content_name: "Led Strip for TV - 10 Million colors | 5 Meters",
      content_category: "Electronics",
      content_ids: ["led-strip-5m"],
      value: 1499.00,
      currency: "INR",
    });

    navigate("/checkout");
  };

  return (
    <>
      <Container fluid className="mt-4">
        {/* Main Display Section */}
        <Row>
          <Col xs={12} className="text-center">
            <div className="position-relative">
              {selectedMedia.type === "image" ? (
                <Image src={selectedMedia.src} alt="Main Media" fluid className="w-100" style={{ maxWidth: "400px" }} />
              ) : (
                <iframe
                  className="w-100"
                  style={{ maxWidth: "400px", height: "250px" }}
                  src={selectedMedia.src}
                  title="Selected Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </Col>
        </Row>

        {/* Horizontal Scrollable Thumbnails */}
        <Row className="mt-3">
          <Col xs={12}>
            <div className="scroll-container">
              {[
                {
                  type: "image",
                  src: "https://elementsproducts.store/cdn/shop/files/11.png?v=1741285829&width=713"
                },
                {
                  type: "image",
                  src: "https://elementsproducts.store/cdn/shop/files/10.png?v=1741285829&width=713"
                },
                {
                  type: "image",
                  src: "https://elementsproducts.store/cdn/shop/files/Untitled_1080_x_1080_px_1.png?v=1741285829&width=713"
                },
                {
                  type: "video",
                  src: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
              ].map((media, index) => (
                media.type === "image" ? (
                  <Image
                    key={index}
                    src={media.src}
                    alt="Thumbnail"
                    className="scroll-image"
                    onClick={() => setSelectedMedia(media)}
                  />
                ) : (
                  <iframe
                    key={index}
                    className="video-thumbnail"
                    src={media.src}
                    title="Video Thumbnail"
                    onClick={() => setSelectedMedia(media)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                )
              ))}
            </div>
          </Col>
        </Row>

        {/* Product Details */}
        <Row className="mt-4">
          <Col xs={12} className="text-center text-md-start">
            <p className="text-muted text-uppercase">Elements Products</p>
            <h2 className="fs-5">Led Strip for TV - 10 Million colors | 5 Meters</h2>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start mb-3">
              <span className="text-decoration-line-through text-muted fs-6 me-2">Rs. 2,999.00</span>
              <span className="fs-6 fw-bold me-2">Rs. 1,499.00</span>
              <Badge bg="success">Sale</Badge>
            </div>
            <p className="text-muted small">Shipping calculated at checkout.</p>
            <Button variant="dark" size="lg" className="w-100 mb-3" onClick={handleBuyNow}>
              Buy it now
            </Button>
            <p>
              Enhance your TV viewing experience with our LED strip backlight. With RGBIC technology and 10 million automatic color changes, you can create the perfect ambiance for any occasion.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />

      {/* CSS */}
      <style>
        {`
          .scroll-container {
            display: flex;
            overflow-x: auto;
            gap: 10px;
            padding: 10px;
            white-space: nowrap;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          .scroll-image, .video-thumbnail {
            width: 70px;
            height: 70px;
            flex-shrink: 0;
            border-radius: 10px;
            cursor: pointer;
          }
          .video-thumbnail {
            border: none;
          }
        `}
      </style>
    </>
  );
};

export default ProductPage;
