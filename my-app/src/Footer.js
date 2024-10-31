import styled from 'styled-components';
import media from './media/media';

const Footerstyles = styled.footer`
    grid-area: footer;
    padding-top: 6.25em; 
    ${media.tablet`
        font-size: 30px;
    `}

    ${media.laptop`
        margin-top:140px;
    `}
`;

function Footer(){
    return(
        <>
           <Footerstyles>
            <h2 id="contact"> Contact Us</h2>
           </Footerstyles>
        </>
    )
}

export default Footer;