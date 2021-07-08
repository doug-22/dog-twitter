import React from "react"


import { Nomes, Nickname, Descricao, Data } from "../Infos/perfilInfo"
import { i } from "../Main"

import imagePerfil from "../Infos/imagePerfil.jpg"


import { 
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  UploadIcon
 } from "./styles"

const Tweet = (props) => {

  return(
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar>
          <img alt="cachorro" src={imagePerfil} />
        </Avatar>

        <Content>
          <Header >
            <strong>{Nomes[i]}</strong>
            <span>{Nickname[i]}</span>
            <Dot />
            <time>{Data[Math.floor(Math.random() * Data.length)]}</time>
          </Header>
        
          <Description>
            {Descricao[Math.floor(Math.random() * Descricao.length)]}
          </Description>

          <ImageContent >
            <img alt="cachorro" src={props.url} />
          </ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              {Math.floor(Math.random() * 100)}
            </Status>
            <Status>
              <RetweetIcon />
              {Math.floor(Math.random() * 100)}
            </Status>
            <Status>
              <LikeIcon />
              {Math.floor(Math.random() * 100)}
            </Status>
            <Status>
              <UploadIcon />
            </Status>
          </Icons>
        </Content>

      </Body>
    </Container>
  )
}

export default Tweet;