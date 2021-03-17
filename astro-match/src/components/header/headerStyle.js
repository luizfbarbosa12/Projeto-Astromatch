import styled from 'styled-components'


export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    width: 30vw;
    height: 5vh;
    box-shadow: 1px 10px #ff5678;
    border-radius:8px;
`

export const AstroMatch = styled.div`
    border-radius: 5px;
    padding: 0.5rem;
    border-bottom: 1px dotted #ff5678;
    border-right: 1px dotted #ff5678;
`
export const IconeMatches = styled.img`
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    transition: .3s ease;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        filter: brightness(0.8);
        height: 2.25rem;
        width: 2.25rem;
        cursor: pointer;
    }
  

`