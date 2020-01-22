import React from 'react';
import styled from "styled-components";
import './styles.css';

const Image = styled.img`
width: 100px;
height: 100px;
background-size: cover;
border-radius: 4px;
position: absolute;
top: 10px;
left: 10px;
`;

const Header = () => (
    <>
        <div id="div-top">
            <header id="main-header">Lobinha Designer</header>
            <Image src={process.env.PUBLIC_URL + '/logo.png'}/>
        </div>
    </>
);

export default Header;