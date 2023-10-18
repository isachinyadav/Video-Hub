import React from 'react'
import { Drawer ,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
 } from '@chakra-ui/react';
 import { BiMenuAltLeft } from "react-icons/bi";
 import {Link} from "react-router-dom";
 const Header = () => {
  const { isOpen , onClose , onOpen} = useDisclosure();
  return (
    <>
    
    <Button  zIndex={'overlay'} pos={"fixed"} top={"4"} left={"4"} colorScheme="purple" p={"0"} width={"10"} height={"10"} borderRadius={"full"} onClick={onOpen}>
    <BiMenuAltLeft size={20}/>
    </Button>
   <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
   <DrawerOverlay/>
   <DrawerContent>
   <DrawerCloseButton/>
   <DrawerHeader >VIDEO HUB</DrawerHeader>
   <DrawerBody>
   <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
         
            <HStack pos={'absolute'} bottom={'10'} left={'12'}>
             <Button colorScheme={'purple'}>
             <Link to={'/login'}>Log In</Link>
             </Button>
             <Button >
             <Link to={'/signUp'} colorScheme={"purple"} variant={'outline'}>Sign Up</Link>
             </Button>

            </HStack>

   </DrawerBody>
   </DrawerContent>
   </Drawer>

    </>
  )
}
export default Header;
