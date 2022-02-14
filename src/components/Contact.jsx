import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import { useModal } from 'react-hooks-use-modal'
import styled from "styled-components"


const roundedSquareWave = (t, delta, a, f) => {
    return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

function Dots() {

    const ref = useRef()
    const { vec, transform, positions, distances } = useMemo(() => {
        const vec = new THREE.Vector3()
        const transform = new THREE.Matrix4()

        // Precompute randomized initial positions
        const positions = [...Array(10000)].map((_, i) => {
            const position = new THREE.Vector3()
            // Place in a grid
            position.x = (i % 100) - 50
            position.y = Math.floor(i / 100) - 50

            // Offset every other column (hexagonal pattern)
            position.y += (i % 2) * 0.5

            // Add some noise
            position.x += Math.random() * 0.3
            position.y += Math.random() * 0.3
            return position
        })

        // Precompute initial distances with octagonal offset

        const right = new THREE.Vector3(1, 0, 0)
        const distances = positions.map((pos) => {
            return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
        })
        return { vec, transform, positions, distances }
    }, [])
    useFrame(({ clock }) => {
        for (let i = 0; i < 10000; ++i) {
            const dist = distances[i]

            // Distance affects the wave phase
            const t = clock.elapsedTime - dist / 25

            // Oscillates between -0.4 and +0.4
            const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8)

            // Scale initial position by our oscillator
            vec.copy(positions[i]).multiplyScalar(wave + 1.3)

            // Apply the Vector3 to a Matrix4
            transform.setPosition(vec)

            // Update Matrix4 for this instance
            ref.current.setMatrixAt(i, transform)

        }
        ref.current.instanceMatrix.needsUpdate = true
    })
    return (
        <instancedMesh ref={ref} args={[null, null, 10000]}>
            <circleBufferGeometry args={[0.15]} />
            <meshBasicMaterial />
        </instancedMesh>
    )
}

const CanvasContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
`

const Breathe = () => {

    return (
        <CanvasContainer>
            <Canvas orthographic camera={{ zoom: 20 }} colorManagement={false}>
                <color attach="background" args={['#001528']} />
                <Dots />
            </Canvas>
        </CanvasContainer>
    )
}


const Header = styled.div`
width: 100%;
grid-row: 2;
grid-column:1/4;
text-align: center;
margin-top: 5%;
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

    @media (max-width: 860px){
        display: flex;
        width: 100%;
  }

  @media (max-width: 1024){
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
  }
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
        background-color: rgba(25, 144, 255, 0.6);
        border: 3px solid #001528;
        border-style: double;
        border-radius: 10px;
        padding: 10px;
    }
    
    button:hover {
        color: #001528;
        background-color: #1990FF;
        transition: 400ms;
        border: 3px solid #fff;
        border-style: double; 
        box-shadow: 0 0 10px #fff; 
        cursor: pointer;
    }

    @media (max-width: 860px){
        width: 295px;
        justify-content: center;
        display: flex;
  }

`
const ModalCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px #fff; 
    background-color: rgba(255, 255, 255, 0.8);
    button {
        background: #fff;
        color: #001528;
        border: 3px solid #001528;
        border-style: double;
        border-radius: 10px;
        padding: 10px;
        margin: 10px;
        font-size: 1.5rem;
    }
    
    button:hover {
        color: #fff;
        background-color: #1990FF;
        transition: 400ms;
        border: 3px solid #fff;
        border-style: double; 
        box-shadow: 0 0 10px #fff; 
        cursor: pointer;
    }
    a {
        color: #001528
    }
    
    a:hover {
        color: #fff;
    }

    @media (max-width: 860px){
        display: flex;
        justify-content: center;
        margin: 0px auto;
        flex-direction: column;
        width: 100%;
  }

  @media (max-width: 1024){
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 600px;
  }
`
// const Container = styled.div`
//     width: calc(100% + 400px);
// `
const Body = styled.section`
    backdrop-filter: blur(10px);
    z-index: 999;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 20px;
    width: 97%;
    margin-top: 20%;
    margin-left: 3%;
    padding: 20px;
    margin-top: 2%;
    align-content: center;
    color: white;
    font-family: Futura;
    
    @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    color: white;
    }
    h1 {
        color: white;
        font-size: 25px;
    }

    @media (max-width: 860px){
        width: 100%;
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
  }

  @media (max-width: 1024){
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 700px;
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
            <Breathe />

            <Body>
                {/* <Container> */}
                <Header>Contact</Header>
                <Card>
                    <h1>Interested in working with us? Thinking about checking out our other projects? Just want to tell us we did a good job? Here's where to do it.</h1>
                </Card>
                <ContactCard>
                    <p>Nate is a big idea guy! He goes up to 11!</p>
                    <button onClick={open}>Nate</button>
                    <Modal1>
                        <ModalCard>
                            <a href="https://coffeegremlin.com/" target="_blank" rel="noreferrer"><button>Portfolio</button></a>
                            <a href="https://github.com/coffeegremlin" target="_blank" rel="noreferrer"><button>GitHub</button></a>
                            <a href="https://www.linkedin.com/in/nathanmausert/" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
                            <button>Email</button>
                            {/* natemausert@gmail.com */}
                            <button onClick={close}>Close</button>
                        </ModalCard>
                    </Modal1>
                </ContactCard>
                <ContactCard>
                    <p>Jeremy kicked this off! He is the leader!</p>
                    <button onClick={open2}>Jeremy</button>
                    <Modal2>
                        <ModalCard>
                            <a href="https://www.darkmeowproductions.com/" target="_blank" rel="noreferrer"><button>Portfolio</button></a>
                            <a href="https://github.com/Darkskittlz" target="_blank" rel="noreferrer"><button>GitHub</button></a>
                            <a href="https://www.linkedin.com/in/jeremydev/" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
                            <button>Email</button>
                            {/* Darkskiiittles@gmail.com */}
                            <button onClick={close2}>Close</button>
                        </ModalCard>
                    </Modal2>
                </ContactCard>
                <ContactCard>
                    <p>Tay is stoked about the design! Yay 4 Tay!</p>
                    <button onClick={open3}>Tay</button>
                    <Modal3>
                        <ModalCard>
                            <a href="https://taywest.dev/" target="_blank" rel="noreferrer"><button>Portfolio</button></a>
                            <a href="https://github.com/tayannewest" target="_blank" rel="noreferrer"><button>GitHub</button></a>
                            <a href="https://www.linkedin.com/in/tayannewest/" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
                            <button>Email</button>
                            {/* tayanne.west@gmail.com */}
                            <button onClick={close3}>Close</button>
                        </ModalCard>
                    </Modal3>
                </ContactCard>
            </Body>

        </>
    )
}
export default Contact