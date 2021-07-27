import React, { Component } from 'react'

export default class CardsDog extends Component {

    render() {
        const { image, breed } = this.props
        return (

            <div className="cards-list">
                <div className="card 1">
                    <div className="card_image"> <img src={image} /> </div>
                    <div className="card_title title-white">
                        <p>{breed}</p>
                    </div>
                </div>
            </div>
        )
    }
}
