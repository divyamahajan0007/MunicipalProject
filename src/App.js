import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Middle from "./Components/Middle";


function App() {
    return(
        <>
        <Navbar />
        <Middle />
        <Footer />
        </>
    ) 
}

export default App;