import { Form } from "react-bootstrap";
// import { FaArrowRight } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="bg-dark text-white py-3 mt-5">
            <footer className="container">
                <Form.Group className="mb-3">
                    <Form.Label>Subscribe to our newsletter</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                    {/* <div className="input-group">
                    <Form.Control type="email" placeholder="Enter email" />
                    <button className="submit-btn">
                        <FaArrowRight />
                    </button>
                    </div> */}
                </Form.Group>


                <hr />

                <p>@ 2025, 
                    Elements Products Powered by Shopify &#x2022;
                    Privacy policy &#x2022; 
                    Refund policy &#x2022; 
                    Terms of service &#x2022; 
                    Contact information &#x2022; 
                    Shipping policy </p>
            </footer>

        </div>

    );
}