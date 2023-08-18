import styled from '@emotion/styled';

export const Details = styled.div`
    padding: 15px;
`;

export const Button = styled.button`
    width: 150px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff00;
    border: none;
    border-radius: 2px;
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    color: #ffffff90;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        border: 1px solid #ffffff90;;
    }
`;

export const Card = styled.div`
    display: flex;
`;

export const Img = styled.img`
    width: 392px;
    height: 574px;
    border-radius: 2px;
`;

export const Info = styled.div`
    margin: 10px;
`;

export const Title = styled.h2`
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    color: #ffffff90;
    text-align: center;
`;

export const List = styled.ul`
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    align-items: baseline;
    gap: 10px;
`;

export const TitleItem = styled.h3`
    width: 100px;
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #ffffff90;
`;

export const TextItem = styled.p`
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    color: #ffffff90;
    text-align: justify;
`;

export const InformationText = styled.h3`
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: #ffffff90;
    text-align: center;
`;

export const InformationButtom = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const InformationLink = styled.Link`
    text-decoration: none;
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #ffffff90;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        border-bottom: 2px solid #ffffff90;;
    }
`;