import React from "react"

import ProfilePage from "../ProfilePage"

import { Nomes } from "../Infos/perfilInfo"

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from "./styles"



export const i = Math.floor(Math.random() * 10)

function Main () {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>{Nomes[i]}</strong>
          <span>{Math.floor(Math.random() * 100) + 50} Tweets</span>
        </ProfileInfo>
      </Header>
      
      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;