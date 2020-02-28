import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import friends from "./friends.json";
import "./index.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  handleClick = id => {
    //event.preventDefault();
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.initiateReset();
    }
  };

  handleIncrement = () => {
    //event.preventDefault();
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    if (newScore === 10) {
      this.winnerReset();
    }
    this.initiateShuffle();
  };

  winnerReset = () => {
    //event.preventDefault();
    this.setState({
      currentScore: 0,
      rightWrong: "Winner!",
      clicked: []
    });
    this.initiateShuffle();
  };

  initiateReset = () => {
    //event.preventDefault();
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You bastards, you killed Kenny!",
      clicked: []
    });
    this.initiateShuffle();
  };

  initiateShuffle = () => {
    let shuffledFriends = shuffleFriends([...friends]);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="South Park Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />{" "}

        <Title>
          Try to click on each character without hitting any duplicates, or
          we'll kill Kenny!!!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              // <Column size="md-3">
              <FriendCard
                key={friend.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                initiateReset={this.initiateReset}
                initiateShuffle={this.initiateShuffle}
                id={friend.id}
                image={friend.image}
              />
              // </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
