import { Heading } from "@chakra-ui/react"

function Header(props){
  return(
    <Heading 
      w="100%" 
      textAlign="center"
      color="white"
      fontWeight="300"
    >
      {props.title}
    </Heading>
  )
}

export default Header