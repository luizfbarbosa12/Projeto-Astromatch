import styled from 'styled-components'

export const BottomDiv = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30vw;
`

export const LikeDislike = styled.img`
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    margin: 1rem;
    transition: .3s ease;

    &:hover {
        filter: brightness(0.8);
        height: 2.25rem;
        width: 2.25rem;
        cursor: pointer;
    }
  
`
export const DivBio = styled.div`
    text-align: center;
`
