import React, { Component } from 'react'
import styled from 'styled-components';

import CardsDog from './CardsDog'
import Navbar from './Navbar';
import { Dogs } from '../Dog'

import '../style/Dog.css'

const TitApp = styled.h1`
 font-size: 90px;
 text-align:center;
 color:#f06d06;
 margin-top: 90px;

`

const enlace =['Home','Noticias','Fotos','Contacto','Mapa']

export default class AppDogs extends Component {
    render() {
        return (
            <div>
                <Navbar data={enlace}/>

                <TitApp>Dogs</TitApp>
                {
                    Dogs.map(dog => (
                        <CardsDog
                            key={dog.id}
                            image={dog.imageUrl}
                            breed={dog.breed}
                        />
                    ))
                }
            </div>
        )
    }
}
