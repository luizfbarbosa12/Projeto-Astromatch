import {ContainerHeader, AstroMatch, IconeMatches} from './headerStyle'
import Match from '../../img/match.png'
import Delete from '../../img/deletar-usuario.png'

export function Header (props) {
    return(
        <ContainerHeader>
                <AstroMatch>Astro Match</AstroMatch>
                <div><IconeMatches onClick={props.verMatches} src={Match}/>Meus Matches</div>
                <div><IconeMatches src={Delete} onClick={props.apagarMatches}/>Apagar Matches</div>
        </ContainerHeader>
    )
}

export default Header;

