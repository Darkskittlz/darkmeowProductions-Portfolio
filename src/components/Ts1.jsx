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
    margin-top: 0.5%;
    @media (max-width: 860px){
        display: flex;
        justify-content: center;
        width: 100%;
        z-index: 998;
        margin-top: 0px;
        margin-bottom: 5px;
    }
`

const Title = styled.h1`
    font-size: 80px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    font-family: 'Amatic SC', cursive;
    color: white;
    z-index: 998;
    @media (max-width: 860px){
        font-size: 60px;
        padding-left: 27px;
        padding-right: 24px;
    }
`

const Title2 = styled.h1`
    font-size: 60px;
    backdrop-filter: blur(10px);
    font-family: 'Amatic SC', cursive;
    margin-bottom: 0;
    color: white;
    z-index: 998;
    text-align: center;

    @media (max-width: 860px){
        font-size: 50px;
        backdrop-filter: none;
    }
`

const GridContainer = styled.div`
    height: 77%;
    width: calc(100% - 350px);
    margin-left: 9%;
    margin-top: 10%;
    padding-top: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    position: fixed;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 2fr 1fr;
    z-index: 999;
    backdrop-filter: blur(10px);
    overflow-x: hidden;
    overflow-y: auto;

    img {
        border: 2px solid #fff;
        border-radius: 50%;
        box-shadow: inset 0 0 30px #6625b1, 0 0 20px 10px #6625b1;
        padding: 10px;
        margin: 5px auto;
        display: flex;
        align-items: center;

        @media (max-width: 860px){
            height: 15%;
            padding: 2px;
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
            /* backdrop-filter: none; */
        }
    }

    @media (max-width: 1030px){
        height: 43vw;
        margin-top: 15%;
        width: calc(100% - 320px);
        margin-left: 6%;
    }

    @media (max-width: 860px){
        margin-top: 25%;
        width: calc(100% - 150px);
        display: flex;
        margin-left: 20%;
        flex-direction: column;
        justify-content: center;
        height: 84%;
        z-index: 997;
        padding-bottom: 0px;
    }

    @media (max-width: 640px){
        height: 70%;
    }
`



const ts1 = () => {
    return (
        <>
            <div className="app">
                <div className="anim">
                    <Suspense fallback={<div>Loading...</div>}>
                        <TitleBox>
                            <Title>tsParticles #1 </Title>
                        </TitleBox>
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

export default ts1

