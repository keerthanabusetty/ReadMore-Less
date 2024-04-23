// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  ContentContainer,
  Title,
  Subtitle,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'
  const onClickButton = () => {
    setReadMore(prevState => !prevState)
  }

  return (
    <BgContainer>
      <ContentContainer>
        <Title>React Hooks</Title>
        <Subtitle>Hooks are a new addition to react</Subtitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </BgContainer>
  )
}
export default ReadMore
