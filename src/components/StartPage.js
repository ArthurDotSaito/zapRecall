import styled from "styled-components"
import logoImage from "../assets/img/logo.png"

const StartPage = (props) => {
    return(
        <InitialPageContainer setDisplayInitialScreen = {props.startPageData.startGame}>
            <ImageContainer src={logoImage}>
            </ImageContainer>
            <TextElement>ZapRecall</TextElement>
            <ButtonElement
                onClick={() => props.startPageData.setStartGame(true)}
                >Iniciar Recall</ButtonElement>
        </InitialPageContainer>
    )
}

const InitialPageContainer = styled.section`
    width: 100%;
    min-height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    display: ${props => !props.setDisplayInitialScreen ? "flex" : "none"};
`
const ImageContainer = styled.img`
    width: 35%;
    min-height: 20%;
    margin: 20px;

`
const TextElement = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Righteous', "cursive";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    margin-bottom: 35px;
`
const ButtonElement = styled.button`
    width: 50%;
    height:54px;
    background-color: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 100px;
    color:#D70900;
    cursor: pointer;
` 
export default StartPage;