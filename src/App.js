import React, { Component } from "react"

import GlobalStyles from "./Styles/GlobalStyles"

import Layout from "./Components/Layout"


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dogs: []
  //   }
  // }

  // componentDidMount() {
  //   fetch("https://dog.ceo/api/breeds/image/random/10")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ dogs: data.message})
  //     })
  // }


  render() {


    return (
      <>
        <Layout />
        <GlobalStyles />
      </>
    )
  }
}

export default App;
