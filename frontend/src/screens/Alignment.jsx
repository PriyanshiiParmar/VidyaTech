import { useState } from 'react';
import Header from './Header';
import { Box,List, ListItem,ListIcon, Flex, Image, Text } from '@chakra-ui/react';
import ViewAllServices from './ViewAllServices';
import Footer from './Footer';
const Alignment = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [isColumn, setIsColumn] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [fontWeight, setFontWeight] = useState('500');
  const handleClick = count => {
    setFirst(count === 'first');
    setSecond(count === 'second');
    setThird(count === 'third');
    setFourth(count === 'fourth');
    setFifth(count === 'fifth');
    setIsColumn(true);
    setTextColor('#010155');
    setFontWeight('700');
  };

  return (
    <Box background="linear-gradient(to left, rgba(131, 101, 142, 0.32) 10%, white 80%)">
      <Header />
      <Box>
        <Text
        textAlign={{xl:'left', md:'left', base:'center'}}
          fontWeight={800}
          color={'#060668'}
          css={{
            WebkitTextStroke: '1.2px #9D9A9A',
          }}
          mx={{xl:'6%', md:'4%'}}
          mt={10}
          fontSize={30}
        >
          Alignment Services
        </Text>
        <Flex flexDirection={{xl:'row', md:'row', base:'column-reverse'}} alignItems={'center'} justifyContent={'space-around'}>
          <Text width={{xl:'60%', md:'56%', base:'85%'}} fontWeight={400} fontSize={18} fontFamily={'arvo-regular'}>
            <Text as={'span'} fontWeight={700} color={'#FF7458'}>
              <Text></Text>
              Transforming
            </Text>{' '}
            digital content with precision and care is our expertise at Vidyaa
            Tech. We specialize    
            {/* <Text> */}
              in converting to ePub for easy digital reading, XML for structured
              data, and OCR for editable text,{' '}
            {/* </Text> */}
            {/* <Text> */}
              we're committed to enhancing your content and streamlining your
              processes with quality and{' '}
            {/* </Text> */}
            innovation for publishers, educators, and businesses alike.
          </Text>
          <Image
            width={250}
            height={220}
            src={require('../images/alignmentSideIms.png')}
          />
        </Flex>
        <Flex
        mt={{xl:'0', base:'10%'}}
          mx={'6%'}
          width={!isColumn && '90%%'}
          justifyContent={'space-between'}
          flexDirection={isColumn ? 'column' : 'row'}
        >
          <Box>
            {/* {(first || second || third || fourth || fifth)? direction ="column": direction = "row"} */}
            <Flex
              mb={8}
              color={textColor}
              fontWeight={fontWeight}
              alignItems={'center'}
            >
              <Image
                mr={2}
                height={3}
                src={require('../images/Ellipse 79.png')}
              />
              {first ?  <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                color={'#E36744'}
                onClick={() => handleClick('first')}
              >
                TYPE SETTING
              </Text>: <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                onClick={() => handleClick('first')}
              >
                TYPE SETTING
              </Text> }
             
            </Flex>
            {first && (
            <Text mb={5} fontWeight={500} width={{xl:'75%',base:'100%'}} py={5} fontFamily={'arvo-regular'} bg={'#FFA995'} fontSize={20} px={8}>
              At Vidyaa Tech, we specialize in providing exceptional typesetting
              services tailored specifically for  the educational sector. Our
              expertise lies in crafting layouts and typographic designs that
              optimize  educational content for textbooks, workbooks, manuals,
              and more.
              <Box px={{xl:10, base:3}} mt={5}>
              <ul>
                <li>Customized Solutions</li>
                <li>Enhanced Accessibility</li>
                <li> Scalability</li>
              </ul>
              </Box>
            </Text>)}
            <Flex
              mb={8}
              alignItems={'center'}
              color={textColor}
              fontWeight={fontWeight}
            >
              <Image
                mr={2}
                height={3}
                src={require('../images/Ellipse 79.png')}
              />
              {second?<Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                color={'#E36744'}
                onClick={() => handleClick('second')}
              >
                MAPPING AND TAGGING
              </Text>:<Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                onClick={() => handleClick('second')}
              >
                MAPPING AND TAGGING
              </Text>}
              
            </Flex>
            {second && (
            <Text mb={5}  fontWeight={500} width={{xl:'80%',base:'100%'}} py={5} fontFamily={'arvo-regular'} bg={'#FFA995'} fontSize={20} px={8}>
              At VidYaa Tech, our Mapping and Tagging service ensures your digital content is organized and accessible. 
              {/* <Text> */}
              We meticulously categorize and tag information, making it easier to navigate and retrieve specific data.
              {/* </Text> */}
              <Box  px={{xl:10, base:3}} mt={5}>
              <ul>
                <li>Technology-driven Approach</li>
                <li>Commitment to Quality</li>
                <li>Customer Satisfaction </li>
              </ul>
              </Box>
            </Text>)}
            <Flex
              mb={8}
              alignItems={'center'}
              color={textColor}
              fontWeight={fontWeight}
            >
              <Image
                mr={2}
                height={3}
                src={require('../images/Ellipse 79.png')}
              />
              {third ? <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                color={'#E36744'}
                onClick={() => handleClick('third')}
              >
                EPUB CONVERSION
              </Text>: <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                onClick={() => handleClick('third')}
              >
                EPUB CONVERSION
              </Text> }
             
            </Flex>
            {third && (
            <Text mb={5}  fontWeight={500} width={{xl:'80%',base:'100%'}} py={5} fontFamily={'arvo-regular'} bg={'#FFA995'} fontSize={20} px={8}>
              At Vidyaa Tech, we make it easy to convert your documents and books into ePub format, which works <Text as={'span'}>  </Text>
              {/* <Text> */}
                perfectly on e-readers and digital platforms.
              {/* </Text> */}
              <Box  px={{xl:10, base:3}} mt={5}>
              <ul>
                <li>Attention to Detail</li>
                <li>Enhanced Accessibility</li>
                <li>Quality Assurance </li>
              </ul>
              </Box>
            </Text>)}
          </Box>
          <Box>
            <Flex
              mb={8}
              alignItems={'center'}
              color={textColor}
              fontWeight={fontWeight}
            >
              <Image
                mr={2}
                height={3}
                src={require('../images/Ellipse 79.png')}
              />
              {fourth ?  <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                color={'#E36744'}
                onClick={() => handleClick('fourth')}
              >
                XML CONVERSION
              </Text>: <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                onClick={() => handleClick('fourth')}
              >
                XML CONVERSION
              </Text>}
              
            </Flex>
            {fourth && (
            <Text mb={5}  fontWeight={500} width={{xl:'85%',base:'100%'}} py={5} fontFamily={'arvo-regular'} bg={'#FFA995'} fontSize={20} px={8}>
             Our skilled team converts your documents into XML format with precision, making sure everything is<Text as={'span'}>  </Text>
             {/* <Text>  */}
accurate and consistent. We help businesses and organizations manage their data better with our XML 
{/* <Text> */}
conversion services. it is great for keeping data organized and easy to share across different platforms
              <Box  pl={{xl:10, base:5}} mt={5}>
              <ul>
                <li>Expertise and Precision</li>
                <li>Enhanced Data Accessibility</li>
                <li>Technology-driven Approach</li>
              </ul>
              </Box>
            </Text>)}
            <Flex
              mb={8}
              alignItems={'center'}
              color={textColor}
              fontWeight={fontWeight}
            >
              <Image
                mr={2}
                height={3}
                src={require('../images/Ellipse 79.png')}
              />
              {fifth ?  <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                color={'#E36744'}
                onClick={() => handleClick('fifth')}
              >
                OCR CONVERSION
              </Text>: <Text
                cursor={'pointer'}
                fontFamily={'arvo-regular'}
                fontSize={19}
                onClick={() => handleClick('fifth')}
              >
                OCR CONVERSION
              </Text>}
             
            </Flex>
            {fifth && (
            <Text mb={5}  fontWeight={500} width={{xl:'80%',base:'100%'}} py={5} fontFamily={'arvo-regular'} bg={'#FFA995'} fontSize={20} px={8}>
              At VidYaa Tech, we make it easy to turn your scanned documents and images into editable and searchable<Text as={'span'}>  </Text>
              {/* <Text> */}
              digital files with our OCR conversion service.
              {/* </Text> */}
              <Box px={{xl:10, base:3}} mt={5}>
              <ul>
                <li>Accuracy</li>
                <li>Customization</li>
                <li>Modern Technology </li>
              </ul>
              </Box>
            </Text>)}
          </Box>
        </Flex>
      </Box>
      <ViewAllServices/>
      <Footer/>
    </Box>
  );
};
export default Alignment;
