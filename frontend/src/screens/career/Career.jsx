import Footer from '../footer/Footer';
import Header from '../header/Header';
import {
  Box,
  Center,
  color,
  Flex,
  Grid,
  Heading,
  Input,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  useBreakpointValue,
  Textarea,
} from '@chakra-ui/react';

const Career = () => {
  return (
    <Box>
      <Header />
      <Box  background="linear-gradient( to left, rgba(131, 101, 142, 0.32) 10%, white 80%)">
      <Flex
      flexDirection={{xl:'row', lg:'row', md:'row', base:'column-reverse'}}
        justifyContent={'space-around'}
        alignItems={'center'}
        width={'100%'}
      >
        <Text
          textAlign={'center'}
          fontWeight={800}
          color={'#010155'}
          css={{
            WebkitTextStroke: '.5px #FBC0C0', // Outline color and width (red)
          }}
          sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
          fontSize={40}
        >
          <Text>Choose Perfect </Text>
          <Text>Career Path with us!</Text>
        </Text>
        <Image
          height={{xl:560, base:300}}
          width={{xl:700, base:300}}
          src={require('../../images/careerImg (1).png')}
        />
      </Flex>
      </Box>
      <Image
        marginTop={{xl:-20}}
        marginLeft={10}
        height={70}
        src={require('../../images/starImg.png')}
      />
      <Box  background={
        'conic-gradient(from 35.64deg at -31.94% 88.73%, #F8F8F8 0deg, #F9F9F9 0.04deg, #786779 45deg, #EDCFED 66.73deg, #CBA9A9 75.6deg, #FFD1D1 75.64deg, #EFFFFF 140.4deg, #F9F9F9 310.43deg, #F8F8F8 360deg)'
      }
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={{xl:2,base:-20}}
>
      <FormControl marginLeft={{xl:'18%'}} width={'100%'} alignContent={'center'}  padding={{xl:20}} paddingX={{base:10}} paddingY={{base:14}}>
      <FormLabel  margin={5} fontSize={18} fontFamily={'arvo-regular'}>Enter your  name</FormLabel>
      <Input
      outline={'none'}
      border={'none'}
          type="text"
          padding={7}
          borderRadius={50}
          width={{xl:'70%', base:'100%'}}
          background="#D8C9D8"
          _focus={{
            outline: "none",
            border:'none',
            boxShadow: "none", // Ensure the default box shadow is removed
          }}
          boxShadow={'2px 3px 4px 0px #00000040'}

        />
        <FormLabel  margin={5} fontSize={18} fontFamily={'arvo-regular'}>Enter your email</FormLabel>
        <Input
          type="email"
          padding={7}
          borderRadius={50}
          border={'none'}
          width={{xl:'70%', base:'100%'}}
          background="#D8C9D8"
          _focus={{
            outline: "none",
            border:'none',
            boxShadow: "none", // Ensure the default box shadow is removed
          }}
          boxShadow={'2px 3px 4px 0px #00000040'}

        />
        <FormLabel  margin={5} fontSize={18} fontFamily={'arvo-regular'}>Enter your query</FormLabel>
        <Textarea type=""
     border={'none'}
          padding={6}
          multiple={true}
          noOfLines={5}
          borderRadius={50}
          width={{xl:'70%', base:'100%'}}
          background="#D8C9D8"
          _focus={{
            outline: "none",
            border:'none',
            boxShadow: "none", // Ensure the default box shadow is removed
          }}
          height={251}
          boxShadow={'2px 3px 4px 0px #00000040'}/>
          {/* <textarea/> */}
          
          <FormLabel margin={5}  fontSize={18} fontFamily={'arvo-regular'}>Upload your resume</FormLabel>
        <Input type="text"
        
         border={'none'}
          padding={7}
          borderRadius={50}
          width={{xl:'32%', base:'100%'}}  
          marginRight={10}
          marginBottom={4}
        //   margin={5}
          background="#D8C9D8"
          _focus={{
            outline: "none",
            border:'none',
            boxShadow: "none", // Ensure the default box shadow is removed
          }}
          boxShadow={'2px 3px 4px 0px #00000040'}/>
          <Input type="text"
           border={'none'}
          padding={7}
          borderRadius={50}
          
          width={{xl:'32%', base:'100%'}}
          background="#D8C9D8"
          _focus={{
            outline: "none",
            border:'none',
            boxShadow: "none", // Ensure the default box shadow is removed
          }}
          boxShadow={'2px 3px 4px 0px #00000040'}/>

  
      </FormControl>
      </Box>
  <Footer/>
    </Box>
  );
};
export default Career;
