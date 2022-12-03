import React from "react";
import styled from "styled-components"
import GlobalStyles from '../src/styles/globalStyles'
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import {cards} from './Deck'


function App() {
  const [startGame, setStartGame] = React.useState(false);
  const [answered, setAnswered] = React.useState([]);
  const [numberOfCards, setNumberOfCards] = React.useState(0);
  const totalNumberOfCards = cards.length;

  const startPageData = {
    startGame,
    setStartGame,
  }
  const headerData = {
    startGame,
    setStartGame
  }
  const cardsData = {
    startGame,
    answered,
    setAnswered,
    setNumberOfCards,
    numberOfCards
  }
  const footerData = {
    startGame,
    numberOfCards,
    setNumberOfCards,
    totalNumberOfCards
  }

  console.log(numberOfCards)

  return (
    <StyedMainContainer>
      <GlobalStyles></GlobalStyles>
      <StartPage startPageData={startPageData}/>
      <Header headerData = {headerData}></Header>
      <Cards cardsData = {cardsData}></Cards>
      <Footer footerData = {footerData}></Footer>
    </StyedMainContainer>
  );
}

const StyedMainContainer = styled.main`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FB6B6B;
  padding-bottom: 200px;
  `
export default App;
