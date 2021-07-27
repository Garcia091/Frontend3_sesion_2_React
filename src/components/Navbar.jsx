import React, { Component } from 'react'
import styled from 'styled-components';

const Nav = styled.div`
top: 0;
width: 100%;
display: block;
position: fixed;
background-color: #444444;
-webkit-transition: all 0.4s;
transition: all 0.4s;
`

const Enlace = styled.a`
    padding: 20px;
    color: #F8F9FB;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;

`
export default class Navbar extends Component {

    render() {
        const { data } = this.props
        console.log(data)
        return (
            <Nav>
                {
                    data.map((enlace, index) => (
                        <Enlace
                            key={index}
                            href="#home"
                        >
                            {enlace}
                        </Enlace>
                    ))
                }
            </Nav>
        )
    }
}
