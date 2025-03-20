// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";

// export default function Success() {
//     const navigate = useNavigate();
//     return (
//         <div style={{ textAlign: "center" }}>
//             <h1>Successful Purchase</h1>
//             <Button variant="dark" className="w-100 mt-3" style={{ width: "20%", display: "block", margin: "20px auto" }}  onClick={() => navigate("/")}>Back to ProductPage </Button>
//         </div>
//     );
// }

//---------------

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { trackEvent } from "../facebookPixel"; // Import Meta Pixel tracking

export default function Success() {
    const navigate = useNavigate();

    // Track "Purchase" event when page loads
    useEffect(() => {
      trackEvent("Purchase", {
        content_name: "Led Strip for TV - 10 Million colors | 5 Meters",
        content_category: "Electronics",
        content_ids: ["led-strip-5m"],
        value: 1499.00, // Total purchase price
        currency: "INR",
      });
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Successful Purchase</h1>
            <Button 
              variant="dark" 
              className="w-100 mt-3" 
              style={{ width: "20%", display: "block", margin: "20px auto" }}  
              onClick={() => navigate("/")}>
              Back to ProductPage 
            </Button>
        </div>
    );
}
