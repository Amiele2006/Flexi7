import { css } from 'styled-components';


const sizes = {
    tablet:'768px',
    laptop:'1024px',
    desktop:'1440px',
}

const media = {
    tablet: (...args) => css`
       @media (min-width: ${sizes.tablet}) 
       {
        ${css(...args)};
       }
    `,
    laptop: (...args) => css`
    @media (min-width: ${sizes.laptop}) {
        ${css(...args)}
    }
    `,
    desktop: (...args) => css`
    @media (min-width: ${sizes.desktop}) {
        ${css(...args)}
    }
    `,
};

export default media;