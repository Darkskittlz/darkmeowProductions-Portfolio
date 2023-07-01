import styled, { keyframes } from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: column;
    justify-content; center;
    z-index: 999;
    position: fixed;
    top: 0; 

    @media screen and (max-width: 960px) {
        width: 95%;
        margin-left: 2.5%;
        margin-top: -50px;
    }
`

export const NavContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    flex-direction: row;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: flex;
    box-shadow: 0 0 10px #09DEEE; ;
`

export const GridContainer = styled.div`
    height: 483px;
    margin-top: 10px;
    overflow-y: scroll;
    backdrop-filter: blur(5px); 

    @media screen and (max-width: 960px) {
        width: 100%;
        border-radius: 10px;
        margin-left: 0.5%;
        overflow-y: scroll;
        margin-top: 10px;
        height: 700px;
    }
`

export const Animation = keyframes`
    0% { box-shadow: 0 0 10px #09EE9A; } 
    30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
    50% { box-shadow: 0 0 20px #09DEEE;  } 
    70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
    100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

export const IntroGridContainer = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 42px;
`

export const IntroContainer = styled.div`
    height: 24vh;
    width: 350px;
    padding: 0px 20px 20px 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    border-radius: 20px;
    backdrop-filter: blur(50px);
    animation-name: ${Animation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    background: rgb(9,9,121);
    background: linear-gradient(165deg, rgba(9,9,121,1) 0%, rgba(1,156,188,1) 100%);

    div {
        height: 200px;
        width: 500px;
    }

    span {
        color: #53b9ff;
    }

    h1 {
        padding: 0px;
        border-radius: 10px;
        margin-top: 50px;
        text-align: center;
        font-size: 30px;
        color: white;
    }

    @media screen and (max-width: 960px) {
        width: 90%;
        height: 140px;
        margin-left: 2%;

        h1 {
            flex-direction: column;
            font-size: 18px;
        }
    }
`

export const CrewGridContainer = styled.div`
    display: inline-flex;
    grid-gap: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    grid-template-columns: 1fr; 
    justify-content: center;
    width: 100%;
    align-items: flex-start;
    
    @media screen and (max-width: 960px) {
        flex-direction: column;
        overflow: scroll;
    }
`

export const CrewColumn = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    width: 225px;
    margin-bottom: 20px;

    h1 {
        text-align: center;
        color: green;
    }

    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

    p {
        color: white;
    }

    @media screen and (max-width: 960px) {
        width: 390px;

        img {
            height: 30%;
        }

        h1 {
            padding: 0px;
            font-size: 15px;
        }
    }
`