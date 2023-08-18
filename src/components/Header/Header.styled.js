import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    background-image:linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
    ), url(../../img/bg-desktop.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Navigation = styled.nav`
    display: flex;
    gap:100px;
    align-items: center;
    align-content: center;
`;
export const Links = styled.Link`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto 0 auto;
    color: #1e9ff5;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 35px;
    line-height: 1.07;
    letter-spacing: 0.03em;
    font-style:oblique;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        transform: scale(1.05);
    }
`;