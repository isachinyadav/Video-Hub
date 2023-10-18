import { Box, Container, Heading , Image ,Stack , Text} from '@chakra-ui/react';
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50% , -50%)',
    textTransform:'uppercase',
    p:'4',
    size:"4xl"
};
 const Home = () => {
 return(  <Box>
     <MyCarosel />
   <Container maxW={'container.xl'} minH={'100vh'} p="16">
   <Heading 
   textTransform={'uppercase'}
   py="2"
   w={'fit-content'}
   borderBottom={'2px solid'}
   m="auto"
   >Services</Heading>
   <Stack  
   h="full"
   p={'4'}
   alignItems={'center'}
   direction={['column' , 'row']}
   >
   <Image src={img5} h={["40","400"]} 
    filter={'hue-rotate(-130deg)'} />
   <Text letterSpacing={'widest'} 
   lineHeight={"190%"} p={['4','16']} 
   textAlign={'center'} >
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quas, minima animi velit asperiores possimus consectetur, enim amet quasi quibusdam ad, aut exercitationem minus fuga aspernatur? Velit magni ex ea perferendis eveniet amet iusto, quos officiis nemo possimus nulla magnam exercitationem. Aut dolorem quibusdam inventore!
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit porro possimus quasi quibusdam eum? Est assumenda libero minus. Labore quam harum cupiditate vitae, nostrum magnam fugiat possimus quaerat distinctio velit aperiam ducimus consectetur tempore! Voluptas voluptate voluptatem maiores quisquam libero, aspernatur porro quidem placeat assumenda voluptates iusto sed error impedit, culpa veritatis quibusdam hic fugiat corporis eveniet velit qui ducimus? Architecto, temporibus vel, consequuntur cum at ratione, consequatur numquam illum iure quae impedit error aliquam unde dolorum dolor voluptas corrupti cupiditate eum blanditiis quidem quos. Expedita iusto beatae ducimus molestiae.
   </Text>
   </Stack>

   </Container>
 </Box>
 );
 };
const MyCarosel =()=>{
    return (
    <Carousel 
    autoPlay 
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
     >
     <Box w="full" h={'100vh'}>
     <Image src={img1} h="full" w={'full'}  />
     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
       Watch The Future
     </Heading>
   </Box>
   <Box w="full" h={'100vh'}>
   <Image src={img2} h="full" w={'full'}  />
   <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
     Watch The Future
   </Heading>
 </Box>
 <Box w="full" h={'100vh'}>
   <Image src={img3} h="full" w={'full'}  />
   <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
     Gaming is Cool
   </Heading>
 </Box>
 <Box w="full" h={'100vh'}>
   <Image src={img4} h="full" w={'full'}  />
   <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
     Night Life is Cool
   </Heading>
 </Box>


    </Carousel>)
}

export default Home ;
