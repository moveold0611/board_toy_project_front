import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    border-radius: 8px;
    margin-bottom: 30px;
    border: 5px solid black;
    width: 90%;
    height: 30%;
`;

export const SButtonContainer = css`
    width: 80%;
    display: flex;
    justify-content: space-around;

    & > a > h3 {
        font-size: 24px;
        font-style: normal;
        color: black;
        
    }
    
`;


export const STitle = css`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 10px;
`;