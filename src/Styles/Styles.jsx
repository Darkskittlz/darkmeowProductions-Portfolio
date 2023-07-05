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
    overflow-y: scroll;
    padding: 20px;
    padding-bottom: 40px;


    @media screen and (max-width: 960px) {
        width: 95%;
        height: 100vh;
        margin-left: 2.5%;
        margin-top: -50px;
    }
`

export const NavContainer = styled.div`
    width: 100%;
    margin-top: 0px;
    border-radius: 10px;
    padding: 10px;
    flex-direction: row;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: flex;
    box-shadow: 0 0 10px #09DEEE; 

    @media screen and (max-width: 960px) {
      margin-top: 40px;
      justify-content: center;
      margin-bottom: -20px;
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
    margin-top: 20px;
`

export const IntroContainer = styled.div`
    height: 15vh;
    width: 350px;
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
      margin-top: 20px;
      margin-bottom: -37px;
      text-align: center;
      font-size: 30px;
      color: white;
    }

    @media screen and (max-width: 960px) {
      width: 90%;
      height: 70px;
      margin-left: 2%;
      display: none;

      h1 {
        flex-direction: column;
        font-size: 18px;
        margin-bottom: -37px;
      }
    }
`

export const GridContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px){
    height: 80vh;
    overflow-y: scroll;
  }
`

export const Grid2Container = styled.div`
  display: flex;
  z-index:999;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  z-index: 999;
  margin-right: 5px;
  backdrop-filter: blur(10px);
  height: 400px;
  width: 50%;
  max-width: 889px;

  @media only screen and (min-width: 781px) and (max-width: 1275px){
     justify-content: flex-start;
     backdrop-filter: none;
     height: 442px;
     width: 100%;
    }

  @media only screen and (max-width: 960px){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      backdrop-filter: none;
    }
`

export const Col = styled.div`
  display: flex;
  z-index: 999;
  height: 100%;
  justify-content: center;
  border-radius: 10px;
  margin-left: 5px;

  @media only screen and (max-width: 768px){
      width: 100%;
      height: 80%;
    }

  img {
    width: 100%;
    height: 100%;
    margin-left: -10px;
    display: flex;
    object-fit: cover;
    align-content: center;
    border-radius: 10px;
    opacity: 1;

    @media only screen and (max-width: 768px){
      width: 100%;
    }
  }
`

export const Col2 = styled.div`
  display: flex;
  border-radius: 10px;
  opacity: 0.9;
  opacity: 1;
  width: 68%;
  flex-direction: column;
  z-index: 999;
  height: 100%;
  
  @media only screen and (max-width: 960px){
    display: flex;
    flex: flex-wrap;
    width: 100%;
    height: 100%;
    align-content: flex-end;
    justify-content: space-between;
  }
`

export const Col2Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 999;
  border-radius: 10px;
  justify-content: center;
  align-content: start;

  h1 {
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
    color: white;
  }

  h3 {
    text-align: left;
    color: white;
    font-size: 14px;
    padding-left: 5px;

    @media screen and (max-width: 860px){
      width: 97%;
      padding: 5px;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 860px) {
    backdrop-filter: blur(10px);
  }

`
