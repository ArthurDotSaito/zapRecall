import React from "react"
import styled from "styled-components"
import { cards } from "../Deck"
import playIcon from "../assets/img/seta_play.png"

const Cards = (props) =>{
    const [clickToOpenQuestion, setClickToOpenQuestion] = React.useState([]);
    const [playIconTrue, setPlayIconTrue] = React.useState(true)

    const CardList = cards.map((card,index) => (
        <CardUL key={index + 1}>
            <FrontViewQuestion displayCard = {!clickToOpenQuestion.includes(index)}>
                Pergunta {index+1}
                <img
                    src = {(playIconTrue) && playIcon}>
                </img>
            </FrontViewQuestion>
        </CardUL>
    ))
    console.log(props.cardsData.startGame);
    return(
        <CardsMainContainer setDisplayCardField = {props.cardsData.startGame}>
            {CardList}
        </CardsMainContainer>
        
    )
}

const CardsMainContainer = styled.section`
    width: 100%;
    min-height: 100%;
    display: ${props => props.setDisplayCardField ? "block" : "none"};
`
const CardUL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0px 25px 0px
`
const FrontViewQuestion = styled.li`
    width: 300px;
    height: 65px;
    display: ${props => props.displayCard ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`
const BackViewQuestion = styled.li = `
`
const OpenQuestionIcon = styled.li = `
`
export default Cards;