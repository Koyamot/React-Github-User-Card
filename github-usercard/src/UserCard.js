import React from "react";
import styled from "styled-components";


const Div = styled.div`
    width: 50%;
    border-radius: 15px 50px 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    background-color: white;
`;

const Info = styled.div`
    margin-left: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 30%;
    height: 200px;
    border: 4px solid black;
    border-radius: 15px 0 0 50px;
`;

const Username = styled.p`
    font-size: 1.1em;
`;

const Location = styled.p`
`;

const Followers = styled.p`

`;

const A = styled.a`
    text-decoration: none;
    color: black;
    margin-top: 16px;
    font-weight: 700;
`;


const UserCard = (props) => {

    console.log(props);

    return(
        <Div className="userCard">
            <Img src={props.userInfo.avatar_url} />
            <Info>
                <Username>Username: {props.userInfo.login}</Username>
                <Location>Location: {props.userInfo.location}</Location>
                <Followers>Followers: {props.userInfo.followers}</Followers>
                <A className="profile-link" href={props.userInfo.html_url}>Link to  profile</A>
            </Info>
        </Div>
    )
}

export default UserCard;