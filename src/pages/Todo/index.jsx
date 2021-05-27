import { useState } from "react"
import { Flex, Input, Button, Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td, Tfoot, Alert,
  AlertIcon, useToast, Avatar, Wrap, WrapItem, Center 
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'

import Header from '../../components/Header'

function Todo(){

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const toast = useToast()

  function addTodo(){
    if(!todo) return

    setTodoList([...todoList, todo])
    
    toast({
      title: '',
      description: (
        <Wrap>
          <WrapItem>
            <Center>
              <Avatar size="sm" name="Dan Abrahmov"  mr="1rem" src="https://bit.ly/tioluwani-kolawole" />
              - Ai sim, hein papai!...
            </Center>
          </WrapItem>
        </Wrap>),
      status: 'success',
      isClosable: true,
      position: "top"
    })
  }
  
  function deleteTodo(index){
    if(!!todoList.length && index >= 0){
      const todoListCopy = todoList

      todoListCopy.splice(index,1)

      setTodoList([...todoListCopy])

      toast({
        title: '',
        description: (
          <Wrap>
            <WrapItem>
              <Center>
                <Avatar size="sm" name="Dan Abrahmov"  mr="1rem" src="https://bit.ly/tioluwani-kolawole" />
                - Mas home, me ajude!...
              </Center>
            </WrapItem>
          </Wrap>),
        status: 'warning',
        isClosable: true,
        position: "top"
      })
    }
  }

  const newItem = (item, index) => ( 
    <Tr key={index}>
      <Td textTransform="capitalize">
        {item}
      </Td>
      <Td textAlign="center">
        <DeleteIcon
          onClick={()=>deleteTodo(index)}
        />
      </Td>
    </Tr>
  )

  return(
    <Flex w="50%" marginTop="10rem" direction="column">
      <Header title="To-do list"></Header>
      <Flex direction="row" mt="2rem">
        <Input 
          value={todo} 
          boxShadow="5px 5px 5px rgba(0,0,0,0.3)" 
          onChange={(e)=> setTodo(e.target.value)}
        />
        <Button 
          boxShadow="5px 5px 5px rgba(0,0,0,0.3)"
          marginLeft="0.5rem"
          padding="0 2rem"
          colorScheme="green"
          onClick={(e)=>addTodo()}
        >Adicionar</Button>
      </Flex>
      {!!todoList.length &&
        <Table boxShadow="5px 5px 5px rgba(0,0,0,0.3)"
          variant="simple" 
          mt="2rem" 
          borderRadius="10px"
          bg="rgba(256,256,256,0.1)"
        >
          <Thead>
            <Tr>
              <Th>Tarefa</Th>
              <Th textAlign="center">Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todoList.map((item, index)=> newItem(item, index))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      }

      {!todoList.length && 
        <Alert 
          status="info" 
          mt="2rem"
          borderRadius="10px"
          bgColor="blackAlpha.200"  
          textColor="white"
        >
          <AlertIcon color="blue.300"/>
          Cadastre sua primeira Tarefa!
        </Alert>}
    </Flex>
  )
}

export default Todo

