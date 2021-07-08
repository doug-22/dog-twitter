import React, { Component } from "react"

import api from "../../Api/api"


import { Nomes, Nickname } from "../Infos/perfilInfo"
import { i } from "../Main"

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from "./style"
import Feed from "../Feed"

import imagePerfil from "../Infos/imagePerfil.jpg"

// function ProfilePage () {

//   return (
//     <Container>
//       <Banner>
//         <Avatar />
//       </Banner>

//       <ProfileData>
//         <EditButton outlined>Editar perfil</EditButton>

//         <h1>Douglas Oliveira</h1>
//         <h2>@dogs</h2>

//         <p>
//           Developer at UNASUS
//         </p>

//         <ul>
//           <li>
//             <LocationIcon />
//             São Luís, Maranhão
//           </li>
//           <li>
//             <CakeIcon />
//             Nascido(a) em 31 de outubro de 1998
//           </li>
//         </ul>

//         <Followage>
//           <span>
//             seguindo <strong>22</strong>
//           </span>
//           <span>
//             <strong>28</strong> seguidores
//           </span>
//         </Followage>
//       </ProfileData>

//       <Feed />
//     </Container>
//   )

// }

// export default ProfilePage;


class ProfilePage extends Component {

  state = {
    dogs:[],
  }

  async componentDidMount() {
    const response = await api.get('')

    this.setState( { dogs: response.data.message })
  }

  render() {

    const { dogs } = this.state

    return (
      <Container>
        <Banner>
          <Avatar>
            <img alt="cachorro" src={imagePerfil} />
          </Avatar>
        </Banner>
  
        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>
  
          <h1>{Nomes[i]}</h1>
          <h2>{Nickname[i]}</h2>
  
          <p>
            Bonito pra cachorro
          </p>
  
          <ul>
            <li>
              <LocationIcon />
              São Luís, Maranhão
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 31 de outubro de 2020
            </li>
          </ul>
  
          <Followage>
            <span>
              seguindo <strong>{Math.floor(Math.random() * 100)}</strong>
            </span>
            <span>
              <strong>{Math.floor(Math.random() * 100)}</strong> seguidores
            </span>
          </Followage>
        </ProfileData>
  
        <Feed dogs={dogs}/>
      </Container>
    )

  }

}

export default ProfilePage;