import React, { useEffect, useRef } from 'react'
import Ts2 from './Ts2'
import { init } from "ityped";
import { BodyContainer, Col, Col2, Col2Text, CrewColumn, CrewGridContainer, Grid2Container, GridContainer, IntroContainer, IntroGridContainer, NavContainer, Row } from '../Styles/Styles';
import tristanIMG from "../assets/Tristan.png"
import aliceIMG from "../assets/langtree (1).jpg"
import headshot2 from "../assets/headshot2.jpg"
import headshot3 from "../assets/headshot3.png"
import headshot4 from "../assets/headshot4.png"
import Navbar from 'react-bootstrap/Navbar';
import ChakraModal from './ChakraModal';

export default function Homepage() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Film", "Code", "Design"],
        })
    });
    return (
        <>
            <Ts2 />
            <BodyContainer>
                <Navbar bg="dark" data-bs-theme="dark">
                    <NavContainer>
                        <Navbar.Brand style={{ color: "white" }} href="#home">Home</Navbar.Brand>
                        <Navbar.Brand style={{ color: "white" }} href="#film">Film</Navbar.Brand>
                        <Navbar.Brand style={{ color: "white" }} href="#photography">Photography</Navbar.Brand>
                        <Navbar.Brand style={{ color: "white" }} href="#content">Content</Navbar.Brand>
                    </NavContainer>
                </Navbar>
                <IntroGridContainer>
                    <IntroContainer>
                        <div>
                            <h1>
                                <h1 id="Title">DarkMeow Productions</h1>
                                <br />
                                <span ref={textRef} />
                            </h1>
                        </div>
                    </IntroContainer>
                </IntroGridContainer>

                <GridContainer>
                    <Row>
                        <Col>
                            <img src={tristanIMG} alt="headshot" />
                        </Col>
                        <Col2>
                            <Col2Text>
                                <h1> Tristan </h1>
                                <h3>
                                    Excepteur anim sit ea irure qui et Duis adipiscing velit minim tempor ut dolore laboris nulla adipiscing do. irure sit reprehenderit eu elit occaecat reprehenderit aliquip Duis minim magna sed consectetur irure tempor aute. sed ea est do cillum proident mollit ipsum consequat officia nisi sunt Duis aliquip do in aute. esse adipiscing minim aute labore consectetur nulla voluptate adipiscing occaecat labore culpa veniam tempor qui quis proident mollit ex. cillum esse ipsum fugiat proident culpa sunt dolor veniam ullamco eiusmod amet officia nostrud labore exercitation esse anim. eiusmod id pariatur cupidatat eiusmod exercitation est aliquip ad irure id deserunt cillum enim veniam sunt minim.
                                </h3>
                            </Col2Text>
                        </Col2>
                    </Row>
                    <Row>
                        <Col>
                            <img src={aliceIMG} alt="headshot" />
                        </Col>
                        <Col2>
                            <Col2Text>
                                <h1> Alice </h1>
                                <h3>
                                    Excepteur anim sit ea irure qui et Duis adipiscing velit minim tempor ut dolore laboris nulla adipiscing do. irure sit reprehenderit eu elit occaecat reprehenderit aliquip Duis minim magna sed consectetur irure tempor aute. sed ea est do cillum proident mollit ipsum consequat officia nisi sunt Duis aliquip do in aute. esse adipiscing minim aute labore consectetur nulla voluptate adipiscing occaecat labore culpa veniam tempor qui quis proident mollit ex. cillum esse ipsum fugiat proident culpa sunt dolor veniam ullamco eiusmod amet officia nostrud labore exercitation esse anim. eiusmod id pariatur cupidatat eiusmod exercitation est aliquip ad irure id deserunt cillum enim veniam sunt minim.
                                </h3>
                            </Col2Text>
                        </Col2>
                    </Row>
                </GridContainer>

                <Grid2Container>
                    <ChakraModal />
                </Grid2Container>


            </BodyContainer>
        </>
    )
}