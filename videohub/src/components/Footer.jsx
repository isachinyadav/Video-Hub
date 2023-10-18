import React from 'react';
import { AiOutlineSend } from "react-icons/ai";
import { Box , Button , Container, Heading , HStack , Stack , VStack , Input ,Text} from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
    <Stack direction={['column','row']}>
    <VStack alignItems={'stretch'} px={"4"} w={'full'}>
    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
    subscribe to get updates
    </Heading>
    <HStack borderBottom={'2px solid white'} py="2">
    <Input placeholder="Enter the Email here..."
    border={'none'}
    borderRadius="none"
    outline={'none'}
    focusBorderColor='none'
    />
    <Button p={'0'} 
    colorScheme={'purple'}
    variant={'ghost'}
    borderRadius={'0 20px 20px 0'}
>   <AiOutlineSend  size={20}/> 
</Button>   
 </HStack>
    </VStack>
    <VStack w={'full'} borderLeft={['none' , '1px solid white']} borderRight={["none" ,"1px solid white"]}>
    <Heading  textAlign={'center'} textTransform={'uppercase'} >Video Hub</Heading>
    <Text>All right received</Text>
    </VStack>
    <VStack w={'full'}>
    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
    <Button variant={'link'} 
    border={'null'} 
    colorScheme='white'>
    <a target={'black'} href='https://www.instagram.com/isachin_yadavv/'>Intagram</a>
    </Button>
    </VStack>
    </Stack>
    </Box>
  )
}
export default Footer;
