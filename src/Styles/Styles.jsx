import styled, { keyframes } from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;
    width: 20%;
    margin-left:40%;
    margin-right: 40%;
    flex-direction: column;
    justify-content; center;
    z-index: 999;
    position: fixed;
    top: 0; 
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
    margin-top: 120px;
`

export const IntroContainer = styled.div`
    height: 17vh;
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
`

export const CrewGridContainer = styled.div`
    display: flex;
    grid-gap: 10px;
    margin-top: 45px;
    grid-template-columns: 1fr; 
    justify-content: center;
    align-items: flex-start;
`

export const CrewColumn = styled.div`
    backdrop-filter: blur(5px); 
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;

    h1 {
        text-align: center;
        color: green;
        padding: 20px 100px 20px 100px;
    }

    img {
        object-fit: cover;
        height: 300px;
    }

    p {
        color: white;
    }

`