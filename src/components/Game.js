import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Wrapper from "./Wrapper";
import consoles from "../consoles.json";
import Polaroids from "./Polaroids";

class Game extends Component {

    state = {
        score : 0,
        highScore: 0,
        message: "",
        consoles: this.shuffleConsoles()
    }

    shuffleConsoles() {
        let shuffled = consoles.sort(function(a, b){return 0.5 - Math.random()});
        return shuffled;
    }

    render () {
        const state = this.state;
        console.log(state.consoles);
        return (
            <div>
                <Navbar 
                    score={state.score}
                    highScore={state.highScore}
                    message={state.message}
                />
                <Jumbotron />
                <Wrapper>
                    <Polaroids cards={state.consoles} />
                </Wrapper>
            </div>
        );
    }
}

export default Game;