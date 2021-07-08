import React from "react"
import StickyBox from "react-sticky-box"


import { Nomes, Nickname } from "../Infos/perfilInfo"
import { i } from "../Main"
import perfil1 from "../Infos/perfil1.jpg"
import perfil2 from "../Infos/perfil2.jpg"
import perfil3 from "../Infos/perfil3.jpg"

import { 
  Container,
  SearchWrapper,
  SearchIcon, 
  SearchInput, 
  Body, 
  List, 
  Item, 
  Title, 
  FollowSuggestion, 
  Infos, 
  Avatar, 
  FollowButton,
  News,
  FollowTopics,
  ButtonMostrar } from "./styles"

function SideBar () {
  
  
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>

          <List>
            <Item>
              <Title>Talvez você curta</Title>
            </Item>

            <Item>
              <FollowSuggestion>
                <div>
                  <Avatar>
                    <img alt="cachorro" src={perfil1}/>
                  </Avatar>
                  <Infos>
                    <strong>{Nomes[i+1]}</strong>
                    <span>{Nickname[i+1]}</span>
                  </Infos>
                </div>
                <FollowButton outlined>Seguir</FollowButton>
              </FollowSuggestion>
            </Item>

            <Item>
              <FollowSuggestion>
                <div>
                  <Avatar>
                    <img alt="cachorro" src={perfil2}/>
                  </Avatar>
                  <Infos>
                    <strong>{Nomes[i+2]}</strong>
                    <span>{Nickname[i+2]}</span>
                  </Infos>
                </div>
                <FollowButton outlined>Seguir</FollowButton>
              </FollowSuggestion>
            </Item>

            <Item>
              <FollowSuggestion>
                <div>
                  <Avatar>
                    <img alt="cachorro" src={perfil3}/>
                  </Avatar>
                  <Infos>
                    <strong>{Nomes[i+3]}</strong>
                    <span>{Nickname[i+3]}</span>
                  </Infos>
                </div>
                <FollowButton outlined>Seguir</FollowButton>
              </FollowSuggestion>
            </Item>

            <Item>
              <ButtonMostrar>
                <span>Mostrar mais</span>
              </ButtonMostrar>
            </Item>
            
          </List>

          <List>
            <Item>
              <Title>O que está acontecendo</Title>
            </Item>

            <Item>
              <News>
                <span>Cães</span>
                <strong>Desfile canino</strong>
                <span>{Math.floor(Math.random() * 3000) + 1000} Tweets</span>
              </News>
            </Item>

            <Item>
              <News>
                <span>Assuntos do momento no Brasil</span>
                <strong>Qual o melhor amigo do homem?</strong>
                <span>{Math.floor(Math.random() * 3000) + 1000} Tweets</span>
              </News>
            </Item>

            <Item>
              <News>
                <span>Covid-19</span>
                <strong>Cães podem ser contaminados?</strong>
                <span>{Math.floor(Math.random() * 3000) + 1000} Tweets</span>
              </News>
            </Item>

            <Item>
              <ButtonMostrar>
                <span>Mostrar mais</span>
              </ButtonMostrar>
            </Item>
            
          </List>

          <List>
            <Item>
              <Title>Tópicos para seguir</Title>
            </Item>

            <Item>
              <FollowTopics>
                <News>
                  <strong>Tweets virais</strong>
                </News>
                <FollowButton outlined>Seguir</FollowButton>
              </FollowTopics>
            </Item>

            <Item>
              <FollowTopics>
                <News>
                  <strong>Gatos</strong>
                </News>
                <FollowButton outlined>Seguir</FollowButton>
              </FollowTopics>
            </Item>

            <Item>
              <FollowTopics>
                <News>
                  <strong>Dog style</strong>
                </News>
                <FollowButton outlined>Seguir</FollowButton>
              </FollowTopics>
            </Item>

            <Item>
              <ButtonMostrar>
                <span>Mostrar mais</span>
              </ButtonMostrar>
            </Item>
            
          </List>

        </Body>
      </StickyBox>
      
    </Container>
  )
}

export default SideBar;