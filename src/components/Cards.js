import React from "react"
import styled from "styled-components"
import { cards } from "../Deck"
import playIcon from "../assets/img/seta_play.png"
import turnIcon from "../assets/img/seta_virar.png"
import rightIcon from "../assets/img/icone_certo.png"
import wrongIcon from "../assets/img/icone_erro.png"
import almostIcon from "../assets/img/icone_quase.png"

const Cards = (props) =>{
    const [clickToOpenQuestion, setClickToOpenQuestion] = React.useState([]);
    const [openedQuestion, setOpenedQuestion] = React.useState([]);
    const [playIconTrue, setPlayIconTrue] = React.useState(true);
    const [rightIconTrue, setRightIconTrue] = React.useState(false);
    const [almostIconTrue, setAlmostIconTrue] = React.useState(false);
    const [wrongIconTrue, setWrongIconTrue] = React.useState(false);
    const [iconAnswer, setIconAnswer] = React.useState(cards.map(() => playIcon))
    const [clickToOpenAnswer, setClickToOpenAnswer] = React.useState([]);
    const [answerCategory, setAnswerCategory] = React.useState(cards.map(() => "notAnswered"));
    const [enableEvent, setEnableEvent] = React.useState(cards.map(() => true));
    
    function openQuestion(index){
        setClickToOpenQuestion([...clickToOpenQuestion, index])
        setOpenedQuestion([...openedQuestion, index])
    }

    function showAnswer(index){
        setClickToOpenAnswer([...clickToOpenAnswer, index])
        setOpenedQuestion([]);
    }

    function answerQuestion(category, index){
        enableEvent[index] = false;
        setAnswerCategory(answerCategory);
        setEnableEvent(enableEvent);
        setClickToOpenQuestion([]);
        setOpenedQuestion([]);
        setClickToOpenAnswer([]);
        props.cardsData.setNumberOfCards(props.cardsData.numberOfCards + 1);
        if(category === 'wrongAnswer'){
            iconAnswer[index] = wrongIcon;
            setIconAnswer(iconAnswer);
        }else if(category === 'rightAnswer'){
            iconAnswer[index] = rightIcon;
            setIconAnswer(iconAnswer);
        }else{
            iconAnswer[index] = almostIcon;
            setIconAnswer(iconAnswer);
        }
    }
    
    const CardList = cards.map((card,index) => (
        <CardUL key={index + 1} data-test="flashcard">
            <FrontViewQuestion 
                displayCard = {!clickToOpenQuestion.includes(index)} 
                answeredCategory = {answerCategory[index]}
                disabled = {enableEvent[index]}
                data-test="flashcard-text"
                >
                Pergunta {index+1}
                <img 
                    type = "button"
                    src = {(iconAnswer[index])}
                    onClick = {() => openQuestion(index)}
                    alt = "playIcon"
                    data-test = {(iconAnswer[index] === wrongIcon) ? "no-icon":
                                (iconAnswer[index] === rightIcon) ? "zap-icon":
                                (iconAnswer[index] === almostIcon) ? "partial-icon":"play-btn"}
                ></img>
            </FrontViewQuestion>
            <BackViewQuestion displayCard = {openedQuestion.includes(index)}>
                {card.question}
                <img 
                    src = {turnIcon}
                    onClick = {() => showAnswer(index)}
                    alt = "turnIcon"
                    data-test="turn-btn"
                >
                </img>
            </BackViewQuestion>
            <FrontViewAnswer displayCard = {clickToOpenAnswer.includes(index)}>
                {card.answer}
                <AnswerButtonContainer>
                    <AnswerButton 
                        onClick = {() => answerQuestion("wrongAnswer", index)}
                        backgroundColor = '#FF3030'
                        data-test = "no-btn">
                    Não lembrei</AnswerButton>
                    <AnswerButton 
                        onClick = {() => answerQuestion("almostRightAnswer", index)}
                        backgroundColor = '#FF922E'
                        data-test="partial-btn">
                    Quase não lembrei</AnswerButton>
                    <AnswerButton 
                        onClick = {() => answerQuestion("rightAnswer", index)}
                        backgroundColor = '#2FBE34'
                        data-test="zap-btn">
                    Zap!</AnswerButton>
                </AnswerButtonContainer>
            </FrontViewAnswer>
        </CardUL>
    ))

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
    font-family: 'Recursive', sans-serif;
    padding-left: 15px;
    padding-right: 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    pointer-events: ${props => (props.disabled === false)&&"none"};
    color: ${props => (props.answeredCategory === "wrongAnswer") ? "#FF3030": 
            (props.answeredCategory === "almostRightAnswer") ? "#FF922E" :
            (props.answeredCategory === "rightAnswer") ? "#2FBE34" : "#333333"};
    text-decoration: ${props => (props.answeredCategory !== "notAnswered")&&"line-through"};
    img{
        cursor: pointer;
    }
`
const BackViewQuestion = styled.li`
    width: 300px;
    min-height: 65px;
    display: ${props => props.displayCard ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    padding: 15px 15px 15px 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    img{
        width: 30px;
        height: 20px;
        align-self: end;
        cursor: pointer;
    }

`
const FrontViewAnswer = styled.li`
    width: 300px;
    min-height: 65px;
    display: ${props => props.displayCard ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    padding: 15px 15px 15px 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
` 
const AnswerButtonContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
`
const AnswerButton = styled.button`
    width: 85px;
    min-height: 35px;
    background-color: ${props => props.backgroundColor};
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    cursor: pointer;
`
export default Cards;