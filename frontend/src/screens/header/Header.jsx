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
  import { useNavigate } from "react-router-dom";
const Screens = [
    { screen: 'home', title: 'Home', navigate: "/" },
    { screen: 'about', title: 'About', navigate : "/about" },
    { screen: 'services', title: 'Service', navigate : "/services" },
    { screen: 'career', title: 'Career', navigate:"/career" },
  ];
const Header = () => {
    const navigate = useNavigate();
  return (  
    <Box>
      <Flex
        bg={'red'}
        flexWrap={'wrap'}
        // margin={5}
        justifyContent={'space-between'}
        px={'2'}
        py={'1'}
        // width={'100%'}
        alignItems={'center'}
        background="linear-gradient( to left, rgba(131, 101, 142, 0.32) 10%, white 80%)"
      >
        <Image
          src={require('../../images/vidyaLogo.png')}
          margin={5}
          // resize={'contain'}
          width={150}
          height={50}
        />
        <Text
          borderRadius={5}
          // justifyContent={'center'}
          // alignItems={'center'}
          bg={'#12129B'}
          color={'white'}
          width={100}
          // height={'6%'}
          textAlign={'center'}
          py={1}
          fontFamily={'libreFranklin'}
          fontSize={15}
          cursor={'pointer'}
          marginRight={3}
        >
          Log in
        </Text>
      </Flex>

      <Flex
        flexWrap={'wrap'}
        bg={'white'}
        justifyContent={'space-around'}
        py={3}
        width={'100%'}
      >
        {Screens.map((items, index) => {
          return (
            <Box
              fontFamily={'libreFranklin'}
              fontSize={17}
              fontWeight={700}
              key={index}
              color={'darkblue'}
              cursor={'pointer'}
              onClick={()=>{  navigate(items.navigate)}}
            >
              {items.title}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
export default Header;
