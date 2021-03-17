import styled from 'styled-components'

export const ContainerPai = styled.div`
    height: 80vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    place-items: center;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    background-color: #f6f3f2;
    border-radius: 8px;
    margin: auto;
    box-shadow: 5px 10px #cccccc;
`

export const ContainerMatches = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
export const ImagensMatches = styled.img`
    margin: 1.5rem;
    width: 16vw;
    height: 32vh;
    border-radius: 8px;
    border: 2px solid #ff5678;
`

export const NomesMatches = styled.p`
    margin: 1.5rem;
    width: 16vw;
    height: 1vh;
    border-radius: 8px;
    text-align: center;
`

export const ContainerDivsMap = styled.div`
    
`

export default ContainerPai;