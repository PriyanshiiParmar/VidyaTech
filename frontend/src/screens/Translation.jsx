import Header from "./Header";
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import ViewAllServices from "./ViewAllServices";
import Footer from "./Footer";

const Translation = () =>{
    return(
        <Box  background="linear-gradient(to left, rgba(131, 101, 142, 0.32) 10%, white 80%)"><Header/>
        <Box>
        <Text mb={8} textAlign={{xl:'left', md:'left', base:'center'}} mt={3}  px={{xl:10, md:10}} sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }} fontWeight={800} fontSize={30} color={'#060668'}>Translation Services</Text>
            <Flex flexDirection={{xl:'row', md:'row', base:'column-reverse'}}  p={10} mx={1} justifyContent={'space-between'} align={'center'}>
            <Box>
           
            <Text fontFamily={'arvo-regular'} fontSize={20}>Our<Text as={'span'} color={'#678223'} fontWeight={800}> translation services</Text> in the EdTech sector aim to break down language barriers, providing a seamless and inclusive <Text>
learning experience for students worldwide. Translation Service These services encompass a range of activities designed </Text>
to adapt educational content for diverse linguistic and cultural contexts.</Text></Box>
<Image mb={{xl:'0', md:0, base:9 }} height={190} width={190} src={require('../images/translationSideImg.png')}/></Flex>
<Box>
    <Text mb={8} px={10} fontFamily={'arvo-regular'} fontSize={20}><Text as={'span'} fontWeight={800}>E-Learning Content Translation:</Text> Translating online courses, tutorials, and educational materials  to make them accessible to students in 
    <Text>
    different languages</Text></Text>
    <Text mb={8} px={10} fontFamily={'arvo-regular'} fontSize={20}><Text as={'span'} fontWeight={800}>Curriculum Translation:</Text> Translating academic curricula, textbooks, and teaching materials to cater to a diverse student body. 
</Text>
    <Text mb={8}  px={10} fontFamily={'arvo-regular'} fontSize={20}><Text as={'span'} fontWeight={800}>
    Multilingual Support for Students:</Text>  Providing translations for support materials, help guides, and interactive content to enhance the learning 
    <Text>
    experience for non-native speakers.</Text></Text>
    <Text px={10} fontFamily={'arvo-regular'} fontSize={20}><Text as={'span'} fontWeight={800}>Localization of Educational Resources:</Text> Adapting resources like video lectures, quizzes, and interactive modules to fit cultural and linguistic
    <Text>
    contexts.</Text></Text>
</Box>
<ViewAllServices/>
<Footer/>
        </Box>
        </Box>
    )
}
export default Translation;