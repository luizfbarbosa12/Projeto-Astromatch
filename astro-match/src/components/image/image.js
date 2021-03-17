import React from 'react'
import {ProfilePic, ContainerImagem, StyledSpan} from './imageStyle'



export function Image (props) {

    return(
        <ContainerImagem>
            <StyledSpan>{props.nomeDoPerfil}</StyledSpan>
            <ProfilePic src={props.fotoDePerfil}/>
        </ContainerImagem>
    )
}

export default Image;