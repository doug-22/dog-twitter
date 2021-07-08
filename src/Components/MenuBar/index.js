import React from "react"

import Button from "../Button"
import imagePerfil from "../Infos/imagePerfil.jpg"

import { Nomes,Nickname } from "../Infos/perfilInfo"
import { i } from "../Main"

import { 
  Container, 
  TopSide, 
  Logo, 
  MenuButton, 
  HomeIcon, 
  BellIcon, 
  EmailIcon, 
  FavoriteIcon, 
  PerfilIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon } from "./styles"

function MenuBar () {

  return(
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagem</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <PerfilIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Twittar</span>
        </Button>

      </TopSide>
      <BotSide>
        <Avatar>
          <img alt="cachorro" src={imagePerfil} />
        </Avatar>

        <ProfileData>
          <strong>{Nomes[i]}</strong>
          <span>{Nickname[i]}</span>
        </ProfileData>

        <ExitIcon/>
      </BotSide>
    </Container>
  )

}

export default MenuBar;