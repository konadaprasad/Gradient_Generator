import Styled from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
flex-direction :column;
justify-content:center;
align-items:center;
font-family:"roboto";
background-image:linear-gradient(to ${props => props.direc},${props =>
  props.bgColor1},${props => props.bgColor2});
  height:100vh;
`

export const Heading = Styled.h1`
font-size:30px;
font-weight:bold;
color:#ededed;
`

export const Para = Styled.p`
font-size:20px;
font-weight:500;
color:#ededed;
`

export const InnerCont = Styled.div`
display:flex;
flex-direction:column;
background-color:transparent;
`

export const Label = Styled.p`
font-size:16px;
font-weight:300;
color:#ededed;
margin-bottom:20px;
margin-left:20px;
`
export const InputItem = Styled.input`
  height:40px;
  width:100px;
  border:none;
  background-color:transparent;

`
export const FormCont = Styled.form`
 display:flex;
 flex-direction:column;
 align-items:center;
`

export const UnOrder = Styled.ul`
display:flex;
flex-direction:row;
flex-wrap:wrap ;
list-style-type:none;
`
export const Cont = Styled.div`
display:flex;
flex-direction :row;
justify-content:space-between;
align-items:center;
width:300px;
margin-bottom:20px;
`
export const Button = Styled.button`
height:40px;
width:100px;
border:none;
background-color: #00c9b7;
color:#1e293b;
border-radius:5px;
`
