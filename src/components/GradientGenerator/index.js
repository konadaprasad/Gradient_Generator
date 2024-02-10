import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  Para,
  InnerCont,
  Label,
  InputItem,
  FormCont,
  UnOrder,
  Cont,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top', active: true},
  {
    directionId: 'BOTTOM',
    value: 'bottom',
    displayText: 'Bottom',
    active: false,
  },
  {directionId: 'RIGHT', value: 'right', displayText: 'Right', active: false},
  {directionId: 'LEFT', value: 'left', displayText: 'Left', active: false},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    finalColor1: '#8ae323',
    finalColor2: '#014f7b',
    finalDirection: gradientDirectionsList[0].value,
    directionsList: gradientDirectionsList,
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  submitForm = event => {
    const {color1, color2, direction} = this.state
    event.preventDefault()
    this.setState({
      finalColor1: color1,
      finalColor2: color2,
      finalDirection: direction,
    })
  }

  onChangeDirection = (directionItem, value) => {
    const {directionsList} = this.state
    this.setState({
      direction: value,
      directionsList: directionsList.map(each => {
        if (each.directionId === directionItem) {
          return {...each, active: true}
        }
        return {...each, active: false}
      }),
    })
  }

  render() {
    const {
      color1,
      color2,
      finalColor1,
      finalColor2,
      finalDirection,
      directionsList,
    } = this.state

    return (
      <MainContainer
        data-testid="gradientGenerator"
        bgColor1={finalColor1}
        bgColor2={finalColor2}
        direc={finalDirection}
      >
        <Heading>Generate a CSS Color Gradient </Heading>
        <Para>Choose Direction</Para>
        <FormCont onSubmit={this.submitForm}>
          <UnOrder>
            {directionsList.map(eachItem => (
              <GradientDirectionItem
                listItem={eachItem}
                key={eachItem.directionId}
                onChangeDirection={this.onChangeDirection}
              />
            ))}
          </UnOrder>
          <Para>Pick the Colors</Para>

          <Cont>
            <InnerCont>
              <Label>{color1}</Label>
              <InputItem
                type="color"
                value={color1}
                onChange={this.changeColor1}
              />
            </InnerCont>
            <InnerCont>
              <Label>{color2}</Label>
              <InputItem
                type="color"
                value={color2}
                onChange={this.changeColor2}
              />
            </InnerCont>
          </Cont>
          <Button type="submit">Generate</Button>
        </FormCont>
      </MainContainer>
    )
  }
}

export default GradientGenerator
