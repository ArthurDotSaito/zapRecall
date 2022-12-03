import React from "react";
import styled from "styled-components"
import GlobalStyles from '../src/styles/globalStyles'
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import Cards from "./components/Cards";
import {cards} from './Deck'

function App() {
  const [startGame, setStartGame] = React.useState(false);

  const startPageData = {
    startGame,
    setStartGame,
  }
  const headerData = {
    startGame,
    setStartGame
  }
  const cardsData = {
    startGame
  }

  return (
    <StyedMainContainer>
      <GlobalStyles></GlobalStyles>
      <StartPage startPageData={startPageData}/>
      <Header headerData = {headerData}></Header>
      <Cards cardsData = {cardsData}></Cards>
    </StyedMainContainer>
  );
}

const StyedMainContainer = styled.main`
  width:100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FB6B6B;
  padding-bottom: 200px;
  `
export default App;
