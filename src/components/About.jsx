import React, { useMemo, Suspense, useRef } from 'react';
import styled from 'styled-components';
import { GrowingExp, Ripple, Terrain } from './AboutXtraFiles/Anims';
import '../Styles/About.scss';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { TerrainSphere } from './AboutXtraFiles/TerrainSphere/TerrainSphere';

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
            autoRotateSpeed={0.2}
        />
    );
}

function AnimationCanvas() {
    return (
        <Canvas
            colorManagement
            camera={{ position: [0, 2, 10], fov: 75 }}
        >
            <ambientLight />
            {/* <hemisphereLight/> */}
            {/* <directionalLight /> */}
            <Suspense fallback={null}>
                {/* <GrowingExp position={[0, -0.5, 0]}/> */}
                <Ripple position={[25, 0, 0]} />
                <Terrain position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                {/* <TerrainSphere position={[-2, 2.5, 0]} rotation={[0, 0, 0]} wireframe /> */}
                {/* <TerrainSphere position={[2, 2.5, 0]} rotation={[0, 0, 0]} /> */}
            </Suspense>
            <CameraControls />
        </Canvas>
    );
}


export function MeshAnim({
    position,
    rotation,
    grid: {
        width,
        height,
        sep
    },
    zOfXYT,
    colorOfXYZT,
    anim: {
        init,
        update
    }
}) {
    const mesh = useRef()
    let t = init;

    //vertex buffer
    let { positions, colors, normals } = useMemo(() => {
        let positions = [], colors = [], normals = []

        for (let yi = 0; yi < height; yi++) {
            for (let xi = 0; xi < width; xi++) {
                let x = sep * (xi - (width - 1) / 2.)
                let y = sep * (yi - (height - 1) / 2.)
                let z = zOfXYT(x, y, t)
                positions.push(x, y, z)

                let color = colorOfXYZT(x, y, z, t)
                colors.push(color.r, color.g, color.b)

                normals.push(0, 0, 1)
            }
        }
        positions = new Float32Array(positions)
        colors = new Float32Array(colors)
        normals = new Float32Array(normals)

        return {
            positions,
            colors,
            normals
        }
    }, [width, height, sep, zOfXYT, colorOfXYZT, t])

    // index buffer 
    let indices = useMemo(() => {
        let indices = []
        let i = 0;
        for (let yi = 0; yi < height - 1; yi++) {
            for (let xi = 0; xi < width - 1; xi++) {
                indices.push(i, i + 1, i + width + 1) //bottom right triangle
                indices.push(i + width + 1, i + width, i)//top left triangle
                i++
            }
            i++
        }

        return new Uint16Array(indices)
    }, [width, height])

    let posRef = useRef(), colorRef = useRef()
    useFrame(() => {
        t = update(t)

        const positions = posRef.current.array, colors = colorRef.current.array;

        let i = 0
        for (let yi = 0; yi < height; yi++) {
            for (let xi = 0; xi < width; xi++) {
                positions[i + 2] = zOfXYT(positions[i], positions[i + 1], t)

                let c = colorOfXYZT(positions[i], positions[i + 1], positions[i + 2], t)
                colors[i] = c.r
                colors[i + 1] = c.g
                colors[i + 2] = c.b
                i += 3
            }
        }

        posRef.current.needsUpdate = true;
        colorRef.current.needsUpdate = true;
    })
    return (
        <>
            <mesh
                ref={mesh}
                position={position}
                rotation={rotation}
            >
                <bufferGeometry>
                    <bufferAttribute
                        ref={posRef}
                        attachObject={['attributes', 'position']}
                        array={positions}
                        count={positions.length / 3}
                        itemSize={3}
                    />
                    <bufferAttribute
                        ref={colorRef}
                        attachObject={['attributes', 'color']}
                        array={colors}
                        count={colors.length / 3}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attachObject={['attributes', 'normal']}
                        array={normals}
                        count={normals.length / 3}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="index"
                        array={indices}
                        count={indices.length / 3}
                    />
                </bufferGeometry>
                <meshStandardMaterial
                    vertexColors
                    side={THREE.DoubleSide}
                    wireframe={true}
                />
            </mesh>
        </>
    );
}

const TitleBox = styled.div`
    display: flex;
    position: fixed;
    z-index: 998;
    width: calc(100% - 200px);
    justify-content: center;
    margin-top: 20px;
    @media (max-width: 860px){
        display: flex;
        justify-content: center;
        width: 100%;
        z-index: 998;
        margin-top: 0px;
    }
`

const Title = styled.h1`
    font-size: 80px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    font-family: 'Amatic SC', cursive;
    color: white;
    z-index: 998;
`

const Title2 = styled.h1`
    font-size: 70px;
    backdrop-filter: blur(10px);
    font-family: 'Amatic SC', cursive;
    margin-bottom: 0;
    color: white;
    z-index: 998;
    text-align: center;

    @media (max-width: 860px){
        font-size: 60px;
    }
`

const GridContainer = styled.div`
    height: 45vw;
    width: calc(100% - 350px);
    margin-left: 120px;
    margin-top: 150px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    position: fixed;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 2fr 1fr;
    z-index: 999;
    backdrop-filter: blur(10px);


    img {
        border: 2px solid #fff;
        border-radius: 50%;
        box-shadow: inset 0 0 30px #6625b1, 0 0 20px 10px #6625b1;
        padding: 10px;
        margin: 5px auto;
        display: flex;
        align-items: center;

        @media (max-width: 860px){
            height: 19%;
        }
    }

    h2 {
        margin-left: 12px;
        font-size: 22px;
        backdrop-filter: blur(10px);
        font-family: 'Amatic SC', cursive;
        margin-bottom: 0;
        color: white;
        z-index: 998;
        text-align: center;

        @media (max-width: 860px){
            display: none;
        }
    }

    @media (max-width: 860px){
        margin-top: 110px;
        width: calc(100% - 150px);
        display: flex;
        margin-left: 70px;
        flex-direction: column;
        justify-content: center;
        height: 77%;
    }
`



const About = () => {
    return (
        <>
            <div className="app">
                <div className="anim">
                    <Suspense fallback={<div>Loading...</div>}>
                        <TitleBox>
                            <Title>Dev Team </Title>
                        </TitleBox>
                        <GridContainer>
                            <div class="about1">
                                <Title2>Jeremy</Title2>
                                <h2>
                                    I'm a react developer focused on bringing imaginative ideas to life. I specialize in the MERN stack and enjoy
                                    creating animations in dynamic web applications. 

                                </h2>
                            </div>
                            <img src="https://media.discordapp.net/attachments/784663350331310090/784663370724933672/Darkskittles-1.jpg?width=130&height=140" />
                            <div class="about2">
                                <Title2>Nathan</Title2>
                                <h2>
                                    I'm a los angeles based developer. When it comes to my work, I have interests in projects that improve users lives. 
                                    I aim to solve problems on both interpersonal and logistical levels.
                                </h2>
                            </div>
                            <img src="https://avatars.githubusercontent.com/u/89211491?s=135&v=4" />
                            <div class="about3">
                                <Title2>Tay</Title2>
                                <h2>
                                    I'm a software developer currently based in Jacksonville, Florida. I'm passionate about the way 
                                    design shapes people’s reactions to media and love learning new ways to simplify and streamline code. 
                                </h2>
                            </div>
                            <img src="data:image/png;base64,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" />
                        </GridContainer>
                        <AnimationCanvas />
                    </Suspense>
                </div>
                <a className="badge" href="https://github.com/claeb101/procedural-mesh-animation" alt="Contributors">
                    <img src="https://img.shields.io/github/last-commit/claeb101/procedural-mesh-animation" alt="" />
                </a>
            </div>
        </>
    )
}

export default About

