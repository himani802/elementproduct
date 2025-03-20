// // import React from "react";
// // import ProductPage from "./components/ProductPage";


// // function App() {
// //   return <ProductPage />;
// // }

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductPage from "./components/ProductPage";
// import CheckoutPage from "./components/CheckoutPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//------------


// import React from "react";
import React, { useEffect } from 'react';
import { initFacebookPixel } from './facebookPixel';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./Navbar";
import ProductPage from "./components/ProductPage";
import CheckoutPage from "./components/CheckoutPage";
import Success from "./components/Success";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return (
    <Router>
      {/* Navbar Always Visible */}
      <CustomNavbar /> 

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
