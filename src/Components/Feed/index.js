import React from "react"

import { Container, Tab, Tweets} from "./styles"
import Tweet from "../Tweet"

const Feed = (props) => {

  const dogsArray = props.dogs.map((dogURL) => {
    return <Tweet url={dogURL} />
  })

  return(
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        {dogsArray}
        <Tweet />
      </Tweets>
    </Container>
  )
}

export default Feed;