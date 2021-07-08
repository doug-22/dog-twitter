import React from "react"

import { Container, MenuTab, Tab, Tweets} from "./styles"
import Tweet from "../Tweet"

const Feed = (props) => {

  const dogsArray = props.dogs.map((dogURL) => {
    return <Tweet url={dogURL} />
  })

  return(
    <Container>
      <MenuTab>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets e respostas</Tab>
        <Tab>Mídia</Tab>
        <Tab>Curtidas</Tab>
      </MenuTab>

      <Tweets>
        {dogsArray}
        <Tweet />
      </Tweets>
    </Container>
  )
}

export default Feed;