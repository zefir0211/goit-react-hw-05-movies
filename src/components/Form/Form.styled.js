import styled from '@emotion/styled';

export const Forma = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px auto;
`;

export const Input = styled.input`
    width: 400px;
    height: 35px;
    background-color: #ffffffad;
    border: none;
    border-radius: 2px;
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.2;
    color: rgb(39, 46, 52);
    text-align: center;
`;

export const SubmitBtn = styled.button`
    height: 35px;
    background-color: #ffffffad;
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.2;
    color: rgb(39, 46, 52);
    border: none;
    border-radius: 2px;
    transition-property: border;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus{
        border: 1px solid #000000;
    }
`;