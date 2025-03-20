// // import React from "react";
// // import { Navbar, Nav, Container } from "react-bootstrap";
// // import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

// // import ProductPage from "./components/ProductPage";
// // import CheckoutPage from "./components/CheckoutPage";

// // export default function CustomNavbar() {
// //     return (
// //         <Navbar expand="lg" className="bg-white shadow-sm">
// //             <Container>
// //                 {/* Left Side - Navigation Links */}
// //                 <Nav className="me-auto">
// //                     <Nav.Link href="ProductPage" className="text-dark fw-medium">Home</Nav.Link>
// //                     <Nav.Link href="Contact.js" className="text-dark fw-medium">Contact</Nav.Link>
// //                 </Nav>

// //                 {/* Center - Brand Name */}
// //                 <Navbar.Brand className="mx-auto fw-bold fs-4">Elements Products</Navbar.Brand>

// //                 {/* Right Side - Icons */}
// //                 <Nav className="ms-auto d-flex align-items-center">
// //                     <Nav.Link href="#" className="text-dark fs-5"><FaSearch /></Nav.Link>
// //                     <Nav.Link href="#" className="text-dark fs-5"><FaUser /></Nav.Link>
// //                     <Nav.Link href="#" className="text-dark fs-5"><FaShoppingBag /></Nav.Link>
// //                 </Nav>
// //             </Container>
// //         </Navbar>
// //     );
// // }


// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function CustomNavbar() {
//     return (
//         <Navbar expand="lg" className="bg-white shadow-sm">
//             <Container>
//                 {/* Left Side - Navigation Links */}
//                 <Nav className="me-auto">
//                     <Nav.Link as={Link} to="/" className="text-dark fw-medium">Home</Nav.Link>
//                     <Nav.Link as={Link} to="/Contact" className="text-dark fw-medium">Contact</Nav.Link>
//                 </Nav>

//                 {/* Center - Brand Name */}
//                 <Navbar.Brand className="mx-auto fs-4">Elements Products</Navbar.Brand>

//                 {/* Right Side - Icons */}
//                 <Nav className="ms-auto d-flex align-items-center">
//                     <Nav.Link as={Link} to="/search" className="text-dark fs-5"><FaSearch /></Nav.Link>
//                     <Nav.Link as={Link} to="/profile" className="text-dark fs-5"><FaUser /></Nav.Link>
//                     <Nav.Link as={Link} to="/cart" className="text-dark fs-5"><FaShoppingBag /></Nav.Link>
//                 </Nav>
//             </Container>
//         </Navbar>
//     );
// }

// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { FaSearch, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function CustomNavbar() {
//     return (
//         <Navbar expand="lg" className="bg-white shadow-sm">
//             <Container>
//                 {/* Brand Name Centered on Mobile */}
//                 <Navbar.Brand className="fs-5 mx-auto">Elements Products</Navbar.Brand>

//                 {/* Toggle Button for Small Screens */}
//                 <Navbar.Toggle aria-controls="navbar-nav">
//                     <FaBars className="fs-4" />
//                 </Navbar.Toggle>

//                 {/* Navbar Content */}
//                 <Navbar.Collapse id="navbar-nav">
//                     {/* Left Side - Navigation Links */}
//                     <Nav className="me-auto text-center">
//                         <Nav.Link as={Link} to="/" className="text-dark fw-medium">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/contact" className="text-dark fw-medium">Contact</Nav.Link>
//                     </Nav>

//                     {/* Right Side - Icons */}
//                     <Nav className="ms-auto text-center">
//                         <Nav.Link as={Link} to="/search" className="text-dark fs-5">
//                             <FaSearch />
//                         </Nav.Link>
//                         <Nav.Link as={Link} to="/profile" className="text-dark fs-5">
//                             <FaUser />
//                         </Nav.Link>
//                         <Nav.Link as={Link} to="/cart" className="text-dark fs-5">
//                             <FaShoppingBag />
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

//----------------------

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bg-white shadow-sm py-2">
            <Container className="d-flex align-items-center justify-content-between">
                {/* Left - Hamburger Menu */}
                <Navbar.Toggle aria-controls="navbar-nav" style={{ boxShadow: "none", border: "none" }}>
                    <FaBars className="fs-4 text-dark" />
                </Navbar.Toggle>

                {/* Center - Brand Name (Stacked) */}
                <Navbar.Brand className="fs-5 text-center ">
                    <span className="fs-6">Elements Product</span>
                    {/* <span className="fs-6">Products</span> */}
                </Navbar.Brand>

                {/* Right - Icons */}
                <div className="d-flex gap-3">
                    <Nav.Link as={Link} to="/search" className="text-dark fs-5">
                        <FaSearch />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cart" className="text-dark fs-5">
                        <FaShoppingBag />
                    </Nav.Link>
                </div>
            </Container>

            {/* Collapsible Menu */}
            <Navbar.Collapse id="navbar-nav">
                <Nav className="w-100 text-center">
                    <Nav.Link as={Link} to="/" className="text-dark fw-medium">Home</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="text-dark fw-medium">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
