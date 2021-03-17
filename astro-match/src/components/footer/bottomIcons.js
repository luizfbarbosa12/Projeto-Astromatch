import React from 'react'
import {BottomDiv, LikeDislike, DivBio} from './bottomIconsStyle'
import heart from '../../img/heart.png'
import x from '../../img/x.png'

export function BottomIcons (props) {
    
    return(
        <DivBio>
            <span>{props.bio}</span>
        <BottomDiv>
            <div>
            <LikeDislike onClick={props.descurtir} src={x}/>
            </div>
            <div>
            <LikeDislike onClick={props.curtir} src={heart}/>
            </div>
        </BottomDiv>
        </DivBio>
    )
}

export default BottomIcons;