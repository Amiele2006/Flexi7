import styled from "styled-components";
import media from './media/media';

const Headerstyle = styled.header`
    grid-area: header;
    text-align:center;
    width:339px;
    ${media.tablet`
        width:810px;
    `}

    ${media.laptop`
        text-align: center;
        width:1000px;
    `}
`;

const HeaderContent= styled.h1`
     ${media.tablet`
        font-size: 48px;
     `}
`;

const StyledButton = styled.button`
    border: none;
    border-radius: 50px; /* Fully rounded button */
    padding: 10px 20px; /* Adjust padding for better size */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => (theme === 'dark' ? '#21a1f1' : '#0056b3')};
    }
`;

function Header({ theme, toggleTheme })  {

    return(
       <Headerstyle>
        <HeaderContent id="header-main"> Arrays </HeaderContent>
        <StyledButton theme={theme} onClick={toggleTheme}>
        🌙 {theme === 'light' ? 'Dark' : 'Light'}
        </StyledButton>
       </Headerstyle> 
    )
}

export default Header;