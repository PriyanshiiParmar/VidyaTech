import Header from './Header';
import { useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Footer from './Footer';
import ViewAllServices from './ViewAllServices';



const Authoring = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const handleClick = (count) => {
    setFirst(count === 'first');
    setSecond(count === 'second');
    setThird(count === 'third');
    setFourth(count === 'fourth');
  };

  
  return (
    <Box
      background="linear-gradient(to left, rgba(131, 101, 142, 0.32) 10%, white 80%)"
      minHeight="100vh"
    >
      <Header />
      <Box >
        <Text
        textAlign={{xl:'left', md:'left', sm:'left',base:'center'}}
        px={10}
          pt={5}
          fontWeight={800}
          fontSize={30}
          color={'#060668'}
          css={{
            WebkitTextStroke: '1.2px #9D9A9A',
          }}
          sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
        >
          Authoring Services
        </Text>
        <Flex flexDirection={{xl:'row',md:'row' ,base:'column-reverse'}}  px={10} alignItems={'center'} justifyContent={'space-between'} mt={4}>
          <Box width={{xl:'65%', base:'100%'}} fontFamily={'arvo-regular'} fontWeight={500} fontSize={20}>
            <Text mb={10}>
              <Text>
                <Text as={'span'} fontWeight={800} color={'#B72323'}>
                  Vidyaa Tech
                </Text>{' '}
                excels at providing specialized authoring services for academic
              </Text>
              <Text>literature, producing high-quality, engaging, and accurate materials.</Text>
            </Text>
            <Text mt={2}>
              Our skilled staff creates a diverse range of educational resources, all adapted to the specific
            </Text>{' '}
            <Text>requirements of educational institutions and publishers.</Text>
          </Box>
          <Box>
            <Image
              alt="side-img"
              height={210}
              width={315}
              src={require('../images/authoringSideImage.png')}
            />
          </Box>
        </Flex>
        <Flex  flexDirection={{xl:'row', md:'row', base:'column'}} px={10} justifyContent={'space-between'} mt={10} fontFamily={'arvo-regular'} fontWeight={700} fontSize={17} color={'#060668'}>

          <Flex alignItems={'center'}>
            <Image mr={3} height={3} src={require('../images/Ellipse 79.png')} />
            <Text onClick={() => handleClick('first')} color={first ? '#E36744' : undefined} cursor={'pointer'}>
              Q&A
            </Text>
          </Flex>
          <Flex alignItems={'center'}>
            <Image mr={3} height={3} src={require('../images/Ellipse 79.png')} />
            <Text onClick={() => handleClick('second')} color={second ? '#E36744' : undefined} cursor={'pointer'}>
              TBS (Text-Based Solutions)
            </Text>
          </Flex>
          <Flex alignItems={'center'}>
            <Image mr={3} height={3} src={require('../images/Ellipse 79.png')} />
            <Text onClick={() => handleClick('third')} color={third ? '#E36744' : undefined} cursor={'pointer'}>
              ALT TEXT WRITING
            </Text>
          </Flex>
          <Flex alignItems={'center'}>
            <Image mr={3} height={3} src={require('../images/Ellipse 79.png')} />
            <Text onClick={() => handleClick('fourth')} color={fourth ? '#E36744' : undefined} cursor={'pointer'}>
              VIDEO SOLUTIONS
            </Text>
          </Flex>
        </Flex>
        {first && (
          <Box  mx={10} fontWeight={600} mt={5} py={10} px={4} width={'75%'} bg={'#FABBAA'}>
            <Text fontFamily={'arvo-regular'} fontSize={16}>
              Our Q&A service provides clear and accurate answers to educational questions, supporting effective learning and comprehension.
            </Text>
          </Box>
        )}
        {second && (
          <Box  mx={10} fontWeight={600} mt={5} ml={{xl:'20%', md:'19%', base:'10%'}} p={10} width={'70%'} bg={'#FABBAA'}>
            <Text width={'95%'} fontFamily={'arvo-regular'} fontSize={16}>
              Our TBS service delivers detailed text-based solutions that clarify complex concepts and enhance understanding
            </Text>
          </Box>
        )}
        {third && (
          <Box  mx={10} fontWeight={600} mt={5} ml={{xl:'28%', md:'18%', base:'10%'}} px={7} py={10} width={'68%'} bg={'#FABBAA'}>
            <Text fontFamily={'arvo-regular'} fontSize={16}>
              Our alt text writing describes visual content accurately, making educational materials more accessible to all learners
            </Text>
          </Box>
        )}
        {fourth && (
          <Box  fontWeight={600} mt={5} ml={{xl:'28%', md:'18%', base:'10%'}} mr={{base:5}} p={10} width={{xl:'64%',sm:'76%',}} bg={'#FABBAA'}>
            <Text fontFamily={'arvo-regular'} fontSize={16}>
              <Text>
                We are dedicated to revolutionizing the way, educational content is delivered. Through our innovative 2D and 3D{' '}
              </Text>
              animated video services, we make academic concepts engaging, effective, and fun for students for grades K-20.
              <Text>
                We firmly believe that education should be not only informative, but also captivating, interactive, and immersive.
              </Text>
              <Text>
                Our comprehensive range of services encompasses dynamic simulations and compelling 2D characters, vibrant{' '}
              </Text>
              illustrations, and engaging storyboards.
            </Text>
            <Text px={{xl:8, base:3}} py={3} fontFamily={'arvo-regular'}>
              <ul>
                <li>Conceptualization and Scripting</li>
                <li>Storyboarding and Design</li>
                <li>Animation and Development</li>
                <li>Review and Feedback</li>
              </ul>
            </Text>
          </Box>
        )}
        <ViewAllServices/>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Authoring;
