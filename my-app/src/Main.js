import styled from 'styled-components'
import media from './media/media';

const DivContainer = styled.div`
    ${media.laptop`
        display:flex;
        flex-wrap:wrap;
        flex-direction: row;
        gap:9rem;
    `}
`;

const Mainstyles = styled.main`
    grid-area: main;
    padding: 20px;
    width:289px;
    ${media.tablet`
        padding:20px;
        width:829px;
    `}


    ${media.laptop`
        width:45%;
    `}

    ${media.desktop`
        font-size: 50rem;
    `}
`;

const Sectionstyles = styled.section`
    grid-area: section;
    padding: 20px;
    width:289px;
    ${media.tablet`
        padding:20px;
        width:829px;
    `}

    ${media.laptop`
        width:40%;
        justify-content: left;
    `}
`;

const HeaderItems = styled.h2`
    font-size:20px;
    ${media.tablet`
        font-size:35px;
    `}

    ${media.laptop`
        &.array-side{
            padding-bottom: 20px;
        }
    `}
`;

const ListItems = styled.li`
    ${media.tablet`
        font-size:29px;
    `}

    ${media.laptop`
        font-size: 29px;
        line-height: 40px;
    `}

    
    ${media.desktop`
        font-size: 2.3rem;
    `}
`;

const ParagraphItems = styled.p`
    ${media.tablet`
        font-size:29px;
    `}

    ${media.laptop`
        font-size: 29px;
        line-height: 40px;
    `}

    ${media.desktop`
        font-size: 2.3rem;
    `}
`;

function Main(){
    return(
        <>
        <DivContainer>
            <Mainstyles>
               <HeaderItems id="array-sub"> Arrays are data sets that are used a lot in javascript and they have many uses such as: </HeaderItems>
               <ListItems className="items"> Creating logic in webpages </ListItems>
               <ListItems className="items"> Store neccessary data </ListItems>
               <ListItems className="items"> and many more.</ListItems>
            </Mainstyles>

            <Sectionstyles className="item">
              <HeaderItems id="array-side"> You can open the Console to See Array Operations </HeaderItems>
              <ParagraphItems className="items"> Check the console for array manipulations and their outputs accordingly.</ParagraphItems>
            </Sectionstyles>
        </DivContainer>
        </>
    )
}

export default Main;