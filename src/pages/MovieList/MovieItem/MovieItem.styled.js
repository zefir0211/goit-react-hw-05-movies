import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.div`
    position: relative;
`;

export const NavbarLink = styled(Link)`
    display: block;
    text-decoration: none;
`;

export const Img = styled.img`
    width: 392px;
    height: 574px;
    border-radius: 2px;
`;

export const Info = styled.div`
    position: absolute;
    bottom: 0;
    right: 0%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff50;
    font-family: Roboto,sans-serif;
    letter-spacing: .02em;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: rgb(39, 46, 52);
`;

export const H3 = styled.h3`
`;