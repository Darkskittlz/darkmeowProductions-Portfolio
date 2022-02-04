import React from 'react'
import styled from "styled-components"
import HomeElement from '../constants/homeElement'


const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    h1 {
        font-size: 25px;
        position: relative;
    }
`
const Body = styled.section`
    height: 40vw;
    display: flex;
    align-content: center;
    position: relative;
    z-index: 1;
`

const Homepage = () => {
    return (
        <>
            <Body>
                <Card>
                <HomeElement />
                    <h1>Home Page</h1>
                </Card>
            </Body>
        </>
    )
}

export default Homepage
