import '../App.css';
import React, { Suspense, useCallback, useMemo, useRef } from 'react';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import { Container, Row, Col } from 'react-grid-system';
import typewriter from '../assets/notMyType.otf';
import * as THREE from 'three';
import circleImg from '../assets/circle.png';
import { Merch } from '../constants/constants';
import styled from 'styled-components';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls })


function CameraControls() {
    const {
        camera,
        gl: { domElement }
    } = useThree();

    const controlsRef = useRef();
    useFrame(() => controlsRef.current.update())

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, domElement]}
            autoRotate
            autoRotateSpeed={-0.2}
        />
    )
}

function Points() {
    const imgTex = useLoader(THREE.TextureLoader, circleImg);
    const bufferRef = useRef();

    let t = 0;
    let f = 0.002;
    let a = 4;

    const graph = useCallback((x, z) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])


    //count = number of points along one axis
    const count = 100

    //sep = seperation or distance between each point
    const sep = 3
    let positions = useMemo(() => {
        let positions = []

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y = graph(x, z);
                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph])

    useFrame(() => {
        t += 15
        const positions = bufferRef.current.array;

        let i = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);

                positions[i + 1] = graph(x, z);
                i += 3;
            }
        }

        bufferRef.current.needsUpdate = true;
    })

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attachObject={['attributes', 'position']}
                    count={positions.length / 3}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>

            <pointsMaterial
                attach="material"
                map={imgTex}
                color={0x00AAFF}
                size={0.5}
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    )
}

function AnimationCanvas() {
    return (
        <Canvas
            colorManagement={false}
            camera={{ position: [100, 10, 0], fov: 75 }}
        >
            <Suspense fallback={null}>
                <Points />
            </Suspense>
            <CameraControls />
        </Canvas>
    );
}

const TitleBox = styled.div`
    display: flex;
    position: fixed;
    width: calc(100% - 200px);
    justify-content: center;
    margin-top: 20px;
`

const Title = styled.h1`
    font-size: 70px;
    font-family: 'Yellowtail', cursive;
    margin-bottom: 0;
    color: white;
`


const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 81%;
    height: 300px; 
    padding: 1rem;
    row-gap: 2rem;
    position: fixed;
    z-index: 999;
    position: absolute;
    left: 61%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const Card = styled.div`
        width: 250px;
        height: 350px;
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(4px);
        z-index: 999;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        h1 {
            font-size: 25px;
            font-family: "notMyType";
            color: white;
            width: 100%;
            text-align: center;
            z-index: 999;
        }

        p {
            text-align: center;er
            color: white;
            font-size: 20px;
        }
    `


const ProductGrid = () => {
    return (
        <>
            <TitleBox><Title>Products</Title></TitleBox>
            <Body>
                {Merch.map(({ id, image, title, description }) => (
                    <Row>
                        <Col sm={2}>
                            <Card key={id}>
                                <img src={image} alt={title} />
                                <h1>{title}</h1>
                                {/* <p>{description}</p> */}
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Body>
        </>
    )
}


const Products = () => {
    return (
        <>
            <ProductGrid />
            <div className="anim">
                <Suspense fallback={<div>Loading...</div>}>
                    <AnimationCanvas />
                </Suspense>
            </div>
        </>
    );
};

export default Products;
