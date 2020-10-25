import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
background: transparent;
font-size: 1.4rem;
border-radius: 0.4rem;
border: 0.05rem solid var(--lightBlue);
color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
border-color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
padding: 0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
margin: 0 0.5rem;
&:hover{
    background: ${props => props.cart? "var(--mainYellow)" : "var(--mainBlue)"} ;
    color: white;
}
&:focus{
    outline: none;
}
`