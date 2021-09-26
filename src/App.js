import React from 'react';
import './App.css';


import {Container} from "@material-ui/core";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";


function App() {
    return (
        <Container maxWidth="md">
            <Header/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Achievements/>
            <Contact/>
            <Footer/>
        </Container>
    );
}

export default App;
