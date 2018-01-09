import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import gameSystems from "./gameSystems.json";
import "./App.css";

class App extends Component {

  // Setting this.state.gameSystems to the gameSystems json array
  state = {
    gameSystems,
    score: 0,
    guessText: "Click an image to begin!"
  };

  shuffle = arr => {
    console.log(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
    return arr;
  };

  markSys = index => {
    let gameSystems = this.state.gameSystems;
    let score = this.state.score;
    let guessText = this.state.guessText;
    const markedId = index;
    if (gameSystems[markedId].clicked === false)
      {
        gameSystems[markedId].clicked = true;
        score ++;
        guessText = "You guessed Correct!!";
        this.setState({ gameSystems, score, guessText});
      }
    else
      {
        score = "YOU LOSE!!!"; //Add screen shake or popup notice here
        guessText = "You guessed WRONG!";
        alert("YOU LOSE!!");
        window.location = "./";
      }
    this.shuffle(this.state.gameSystems)
  }

  // Map over this.state.gameSystems and render a FriendCard component for each friend object
   render() {
    return (
      <div>
        <Navbar score={this.state.score} guessText={this.state.guessText}/>
        <Jumbotron />
        <div className="container">
          <Wrapper>
            {this.state.gameSystems.map((friend, i) => (
              <FriendCard
                markSys={this.markSys}
                id={friend.id}
                index={i}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                company={friend.company}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
