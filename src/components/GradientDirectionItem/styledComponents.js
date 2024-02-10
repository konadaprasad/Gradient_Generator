import Styled from 'styled-components'

export const ListCont = Styled.li`
border:none;
background-color:transparent;
margin:20px;

`
export const Button = Styled.button`
height:40px;
width:100px;
border:none;
background-color:${props => (props.Id ? '#ffffff' : '  #ffffff79')};
color:#1e293b;
border-radius:5px;
opacity:${props => (props.Id ? 1 : 0.5)};
`
