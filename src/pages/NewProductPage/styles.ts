import  styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    button {

        width: 20rem;
        margin-top: 2rem;
        padding:12px 40px;

        border-style: none;
        border-radius: 5px;
        color: #FFFF;
        background: #F28118;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        cursor: pointer;
        }
    }
`;

export const Form = styled.form `

    h3{
            margin-top: -2rem;
            margin-bottom: 2rem;
        }    

    text-align: center;

    width: 60%;
   
    

    background: #16425B;
    color: #fff;

    border-radius: 10px;
    padding: 5rem;

    margin-top: 2rem;
    margin-bottom: 5rem;

    

`;

export const  FormProductBlock = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainSection = styled.div `

    margin-right: 2rem;

    input {
        width: 20rem;
        height: 1.8rem;

        border-radius: 5px;
    }
    select {
        width: 20rem;
        height: 1.8rem;

        border-radius: 5px;
    }

    p {
        margin-left: 0;
        
    }
`;

export const ImageSection = styled.div `
    margin-right: 2rem;
`;