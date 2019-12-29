import React, { Component } from "react";
import Card from "./Card"
import "./Section.css"
import CatPic from "./cat1.png"

class Section extends Component {
    render() {
        return(
            <div className="sectionContainer">
                <h1>{this.props.title}</h1>
                <Card image={CatPic} name="Terry" breed="Domestic medium hair cross" status="Neutered, not vaccinated"
                        gender="Male" yearsOld="2" />
            </div>
        )
    }
}

export default Section