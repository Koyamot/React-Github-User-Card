import React from 'react';
import './App.css';
import UserCard from "./UserCard";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`;

const Container = styled.div`
`;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userInfo: {},
      followers: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/koyamot")
      .then(res => res.json())
        .then((json) => {
          this.setState({
            userInfo: json
          })
          console.log("KO: APP: fetch: userInfo: ", this.state.userInfo)
        })
          .catch(err => {
            console.log(err);
          });
    fetch("https://api.github.com/users/koyamot/followers")
      .then(res => res.json())
          .then((json) => {
            this.setState({
              followers: json
            })
            console.log("KO: APP: fetch: Followers: ", this.state.followers)
          })
            .catch(err => {
              console.log(err);
            });
  }

  render() {
  return (
    <Container>
      <Title>{this.state.userInfo.name}'s Github Usercard</Title>
      <UserCard userInfo={this.state.userInfo} />
      {this.state.followers.map(follower => {
        return <UserCard key={follower.id} userInfo={follower}/>
      })}
    </Container>
  );
  }
}


export default App;