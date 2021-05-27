import { Container } from "@chakra-ui/react"
import Todo from './pages/Todo/'

function App() {
  return (
    <Container 
      maxW="100%"
      h="100vh"
      centerContent 
      bgGradient="linear(to-tr,#d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
    >
      <Todo />
    </Container>
  );
}

export default App;
