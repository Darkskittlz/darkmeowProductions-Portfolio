import React from 'react'
import { useModal } from 'react-hooks-use-modal'
import styled from "styled-components"


const Header = styled.div`
width: 100%;
grid-row: 2;
grid-column:1/4;
padding: 15px;
text-align: center;
font-size: 3rem;
grid-row: 1;
color: white;
font-family: "Yellowtail";
`

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 2;
    grid-column:1/4;
    padding: 15px;
    text-align: center;
    font-size: 1.4rem;
`

const ContactCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.4rem;
    grid-row: 3;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px #fff; 
    background-color: rgba(255, 255, 255, 0.5);


    button {
        background: transparent;
        border: 3px solid #001528;
        border-style: double;
        border-radius: 10px;
        padding: 10px;
    }
    
        button:hover {
        color: #001528;
        background-color: #1990FF;
        transition: 300ms;
        border: 3px solid #fff;
        border-style: double; 
        box-shadow: 0 0 10px #fff; 
    }
`

const Body = styled.section`
    background-color: #001528;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 20px;
    align-content: center;
    text-align: center;
    color: white;

    h1 {
        color: white;
        font-size: 25px;
    }
`

const Contact = () => {
    const [Modal1, open, close] = useModal("root", {
        preventScroll: true,
        closeOnOverlayClick: false
    })

    const [Modal2, open2, close2] = useModal("root", {
        preventScroll: true,
        closeOnOverlayClick: false
    })

    const [Modal3, open3, close3] = useModal("root", {
        preventScroll: true,
        closeOnOverlayClick: false
    })

    return (
        <>
            <Body>
                <Header>Contact</Header>
                <Card>
                    <h1>Interested in working with us? Thinking about checking out our other projects? Just want to tell us we did a good job? Here's where to do it.</h1>
                </Card>
                    <ContactCard>
                        <h1>Nate is a big idea guy! He goes to 11!</h1>
                        <button onClick={open}>Nate</button>
                        <Modal1>
                        <button><a href="https://coffeegremlin.com/" target="_blank" rel="noreferrer">Portfolio</a></button>
                        <button><a href="https://github.com/coffeegremlin" target="_blank" rel="noreferrer">GitHub</a></button>
                        <button><a href="https://www.linkedin.com/in/nathanmausert/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                        <button>Email</button> 
                        {/* natemausert@gmail.com */}
                        <button onClick={close}>CLOSE</button>
                        </Modal1>
                    </ContactCard>
                    <ContactCard>
                        <h1>Jeremy kicked this off! He is the leader!</h1>
                        <button onClick={open2}>Jeremy</button>
                        <Modal2>
                        <button><a href="https://www.darkmeowproductions.com/" target="_blank" rel="noreferrer">Portfolio</a></button>
                        <button><a href="https://github.com/Darkskittlz" target="_blank" rel="noreferrer">GitHub</a></button>
                        <button><a href="https://www.linkedin.com/in/jeremydev/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                        <button>Email</button>
                        {/* Darkskiiittles@gmail.com */}
                        <button onClick={close2}>CLOSE</button>
                        </Modal2>
                    </ContactCard>
                    <ContactCard>
                    <h1>Tay is stoked about the design! Yay!</h1>
                        <button onClick={open3}>Tay</button>
                        <Modal3>
                        <button><a href="https://taywest.dev/" target="_blank" rel="noreferrer">Portfolio</a></button>
                        <button><a href="https://github.com/tayannewest" target="_blank" rel="noreferrer">GitHub</a></button>
                        <button><a href="https://www.linkedin.com/in/tayannewest/" target="_blank" rel="noreferrer">LinkedIn</a></button>
                        <button>Email</button>
                        <button onClick={close3}>CLOSE</button>
                        </Modal3>
                    </ContactCard>
            </Body>
        </>
    )
}

export default Contact
