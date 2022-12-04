import styled from "styled-components"

const Footer = (props) =>{

    return(
        <FooterContainer 
            setDisplayFooter={props.footerData.startGame}
            data-test="footer">
            <p>{props.footerData.numberOfCards}/{props.footerData.totalNumberOfCards} CONCLUÍDOS</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    width: 100%;
    min-height: 70px;
    display: ${props => props.setDisplayFooter ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #333333;

`   

export default Footer;