import React from 'react';
import styled from '@emotion/styled';

const PhraseContainer = styled.div`
     padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    
    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`

const Phrase = ({ content }) => {
    if(Object.keys(content).length === 0) {
        return null
    }
    return (
        <PhraseContainer>
            <h1>{content.quote}</h1>
            <p>{content.author}</p>
        </PhraseContainer>
    );
};

export default Phrase;