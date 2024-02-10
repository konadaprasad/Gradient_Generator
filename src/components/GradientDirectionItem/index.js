import {ListCont, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {listItem, onChangeDirection} = props
  const {directionId, value, displayText, active} = listItem

  const changeDirection = () => {
    onChangeDirection(directionId, value)
  }

  return (
    <ListCont>
      <Button type="button" Id={active} onClick={changeDirection}>
        {displayText}
      </Button>
    </ListCont>
  )
}

export default GradientDirectionItem
