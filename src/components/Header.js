import logoImage from "../assets/img/logo.png"
import styled from "styled-components"

const Header = (props) =>{
    return(
        <HeaderContainer setDisplayHeader={props.headerData.startGame}>
            <HeaderImage 
                src = {logoImage}> 
                </HeaderImage>
            <HeaderText>ZapRecall</HeaderText>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.section`
    display: ${props => props.setDisplayHeader ? "flex":"none"};
    align-items: center;
    justify-content: center;
    margin-top: 45px

`
const HeaderImage = styled.img`
    width: 52px;
    height: 60px;

`
const HeaderText = styled.h1`
    width: 205px;
    height: 44px;
    font-family: "Righteous";
    font-style: "cursive";
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.012em;
    color: #FFFFFF;
`
export default Header