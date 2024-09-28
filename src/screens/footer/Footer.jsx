import {
    Box,
    Center,
    color,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
   useBreakpointValue 
  } from '@chakra-ui/react';
const Footer = ()=>{
    return(
        <Box>
            <Box
        padding={5}
        background="linear-gradient(74.59deg, #744652 52.96%, #444765 69.35%, #171D60 74.52%)"
      >
        <Image
          marginX={{ xl: 130, base: 'auto' }}
          marginY={{ base: 3 }}
          width={{ xl: 240, base: 40 }}
          height={{ xl: 100, base: 10 }}
          src={require('../../images/vidyaLogo.png')}
        />
        <Flex
          flexDirection={{ xl: 'row', md:'row', lg:'row', base: 'column' }}
          // alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Box fontFamily={'reggaeone-regular'} marginTop={{md:7}} fontWeight={{xl:400, lg:300}} fontSize={{xl:20}}>
            <Text color={'#C3C3F7'}>Streamlined Design</Text>
            <Text color={'#DAD4B5'}>Captivating Content</Text>
            <Text color={'#C8E4E3'}>Elevate Learning</Text>
          </Box>
          <Box
            fontFamily={'Abhaya Libre SemiBold'}
            color={'white'}
            fontSize={{xl:22, lg:18, md:16, base:14}}
          >
            <Text  fontWeight={600} fontSize={{xl:29, lg:25, base:20}} marginTop ={{md:5, base:5}}>
              ABOUT US
            </Text>
            <Text >Our Team</Text>
            <Text>Why Choose us?</Text>
            <Text>Career</Text>
            <Text>Contact</Text>
          </Box>
          <Box
            fontFamily={'Abhaya Libre ExtraBold'}
            color={'white'}
            fontSize={22}
            fontWeight={600}
          >
            <Text marginTop={{base:5}} fontWeight={{xl:800}} fontSize={{xl:29, base:20, md:24}}>
              OUR SERVICES
            </Text>
            <Text  fontSize={{xl:22, lg:18, md:16, base:14}}>
            <Text>Editorial Services</Text>
            <Text>E-learningCustomization</Text>
            <Text>Authoring Services</Text>
            <Text>Alignment Services</Text>
            <Text>Translation Services</Text>
            <Text>Tutoring Services</Text>
            </Text>
          </Box>
        </Flex>
        <Flex
          flexDirection={{ xl: 'row',lg:'row', md:'row', base: 'column' }}
          marginY={{ xl: 20 }}
          justifyContent={'space-between'}
        >
          <Box
            paddingX={{ xl: 28 }}
            fontFamily={'Abhaya Libre ExtraBold'}
            textAlign={{xl:'center'}}
            color={'white'}
          >
            <Text marginTop={{base:5}} fontSize={{xl:27, lg:25, md:24, base:20}} fontWeight={800}>
              GET IN TOUCH
            </Text>
            <Flex alignItems={'center'} fontSize={{xl:22, md:18, base:14}} fontWeight={600}>
              <Image
                marginRight={{xl:5, base:2}}
                height={19}
                width={30}
                src={require('../../images/telephone.png')}
              />
              <Text as="span">+91731-4985066</Text>
            </Flex>
            <Flex
            fontSize={{xl:22, md:18, base:14}}
            marginRight={{xl:5}}
              justifyContent={{xl:'space-around'}}
              alignItems={'center'}
              fontWeight={600}
            >
              <Image
                marginRight={5}
                height={15}
                width={25}
                src={require('../../images/msg.png')}
              />
              <Text as="span">info@vidyaa-tech.com</Text>
            </Flex>
          </Box>
          <Box
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
            fontFamily={'Abhaya Libre SemiBold'}
            fontSize={{xl:22, base:14}}
            color={'white'}
            paddingX={{xl:160}}
          >
            <Flex
              flexDirection={{ xl: 'row' }}
              alignItems={{xl:'center'}}
              marginTop={{base:7}}
            >
              <Image
                marginRight={{xl:5}}
                height={{xl:29, base:5}}
                width={7}
                src={require('../../images/location.png')}
              />
              <Text>S-4 Agrawals, 4th floor India</Text>
            </Flex>
            <Text marginLeft={{ xl: 14 , base:7}}>YN road, Indore - 452001</Text>
            <Text marginLeft={{ xl: 14, base:7 }}>Madhya Pradesh, India</Text>
          </Box>
        </Flex>
      </Box>
      <Flex
        height={55}
        padding={8}
        bg={'#464671'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Text
            fontFamily={'Abhaya Libre SemiBold'}
            fontSize={{xl:22, base:17}}
            fontWeight={{xl:600, base:300}}
            color={'white'}
          >
            ©2024 All Right Reserved By Gyanohm Learning
          </Text>
        </Box>
        <Box>
          <Image
            cursor={'pointer'}
            height={{xl:23, base:5}}
            src={require('../../images/socialMedia.png')}
          />
        </Box>
      </Flex>
        </Box>
    )
};
export default Footer;