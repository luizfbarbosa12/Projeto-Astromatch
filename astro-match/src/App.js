import { useEffect, useState } from "react";
import ContainerPai from "./appStyle";
import {ContainerMatches, ImagensMatches, NomesMatches, ContainerDivsMap} from './appStyle'
import Image from "./components/image/image";
import BottomIcons from "./components/footer/bottomIcons";
import axios from "axios";
import {
  BASE_URL,
  axiosConfig,
  axiosConfigPost,
} from "./requisicoes/requisicoes";


import Header from "./components/header/header";
function App() {
  const [profiles, setProfiles] = useState([]);
  const [matches, setMatches] = useState([]);
  const [wasLiked, setWasLiked] = useState(false);
  const [mostrarMatches, setMostrarMatches] = useState(false);
  const [listaDeMatches, setListaDeMatches] = useState([]);

  //==================================== REQUISIÇÕES=====================
  const buscaPerfil = () => {
    axios
      .get(`${BASE_URL}/person`, axiosConfig)
      .then((response) => {
        setProfiles(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    buscaPerfil();
  }, [matches]);

  const body = {
    id: profiles.id,
    choice: wasLiked,
  };

  const escolherPessoa = () => {
    axios
      .post(`${BASE_URL}/choose-person`, body, axiosConfigPost)
      .then((response) => {
        setWasLiked(true)
        setMatches(response)
      })
      .catch((error) => {
        console.log(error);
      });

      if(Notification.permission === 'granted' && wasLiked) {
        new Notification('Deu Match!')
    }
  };

  useEffect(() => {
    Notification.requestPermission();
}, [])

  //Uma pergunta, porque ficou meio confuso pra mim esse pedaço: os perfis já vem setados uns com true e outros com false da API? Porque às vezes dá match e às vezes não. Às vezes o setWasLiked seta o estado como true e às vezes não. :/ 
  // Pelo menos, da forma que eu deixei aqui, às vezes dá match com os perfis. Se eu deixasse a linha 47 com setWasLiked(response.data.isMatch), nunca dá match nenhum por algum motivo...

  const verMatches = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((response) => {
        setMostrarMatches(!mostrarMatches);
        setListaDeMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const apagarMatches = () => {
    axios
      .put(`${BASE_URL}/clear`, axiosConfigPost)
      .then((response) => {
        alert('Matches Apagados')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //=================================== RETURN ============================
  return ( <ContainerDivsMap>
    <ContainerPai className="app">
      <div>
        <Header apagarMatches={apagarMatches} verMatches={verMatches} />
      </div>
      <div>
        <Image nomeDoPerfil={profiles.name} fotoDePerfil={profiles.photo} />
      </div>
      <div>
        <BottomIcons
          bio={profiles.bio}
          descurtir={buscaPerfil}
          curtir={escolherPessoa}
        />
      </div>
    </ContainerPai>
    {mostrarMatches ? <ContainerMatches>
      {listaDeMatches.map((pessoa, index) => {
        return (
            <div>
              <ImagensMatches src={pessoa.photo} alt='match'/>
              <NomesMatches>{pessoa.name}</NomesMatches>
            </div>
        );
      })}
      </ContainerMatches> : ''}
    
    </ContainerDivsMap>
  );
}

export default App;
