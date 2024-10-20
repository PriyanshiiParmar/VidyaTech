import Header from './Header';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import ViewAllServices from './ViewAllServices';
import Footer from './Footer';
const lists1 = [
    {
        content:"Personalized Consultation",
    },
    {
        content:"Expert Tutor Matching"
    },
    {
        content:"Engaging Sessions"
    },
    {
        content:"Progress Monitoring and Feedback"
    },
    {
        content:"Flexible Accessibility"
    },
    {
        content:"Personalized Approach"
    }
];
const lists2 = [
    {
        content:"Qualified Tutors",
    },
    {
        content:"Interactive Learning."
    },
    {
        content:" Flexibility and Convenience"
    },
    {
        content:"Proven Results Tutoring"
    },
    {
        content:" Supportive Learning Environment"
    },
    {
        content:"Commitment to Excellence"
    }
];
const Tutoring = () => {
  return (
    <Box
      background="linear-gradient(to left, rgba(131, 101, 142, 0.32) 10%, white 80%)"
      minHeight="100vh"
     
    >
      <Header />
      <Box>
        <Text
        textAlign={{xl:'left', md:'left', base:'center'}}
          fontWeight={800}
          fontSize={30}
          color={'#060668'}
          css={{
            WebkitTextStroke: '0.5px #BCB8B8', // Outline color and width
          }}
          mb={5}
          px={'5%'}
          mt={10}
        >
          Tutoring Services
        </Text>
        <Flex flexDirection={{xl:'row', md:'row', base:'column-reverse'}} alignItems="center" justifyContent="space-around">
          <Box fontFamily={'arvo-regular'} fontSize={20} width="65%">
            <Text width={{xl:'80%'}}>
                At
                <Text as={'span'} color={'#B72323'} fontWeight={800}>
                  {' '}
                  Vidyaa Tech,
                </Text>{' '}
                we’re passionate about transforming education through{' '}
              innovative tutoring services.
            </Text >
            {/* </Text> */}
            <Text width={{xl:'88%',}} mt={2}>
                Our mission is to empower students of all ages with the
                knowledge and skills they need
              {/* </Text> */}
              {/* <Text> */}
                {' '}
                to succeed. Through personalized one-on-one sessions delivered
                by expert tutors, we{' '}
              {/* </Text> */}
              {/* <Text> */}
                ensure that each student receives tailored support to meet their
                unique learning goals.
              {/* </Text> */}
            </Text>
          </Box>
          <Box ml={5}>
            <Image
            mb={5}
              src={require('../images/tutoringSideImg.png')}
              height={155}
              width={180}
              alt="Tutoring Service"
            />
          </Box>
        </Flex>
        <Flex pl={{xl:0, md:0, base:8}} flexDirection={{xl:'row',md:'row', base:'column'}} width={{xl:'68%',md:'90%', base:'100%'}} justifyContent={'space-between'} mt={'5%'} mx={'6%'}>
        <Flex  flexDirection={'column'}>
         {lists1.map((list) => 
            <Flex alignItems={'center'}>
                <Image mr={2} height={3} src={require('../images/darkDot.png')}/>
                <Text fontFamily={'arvo-regular'} fontWeight={400}>{list.content}</Text>
                </Flex>
         )}
        </Flex>
        <Flex  flexDirection={'column'}>
         {lists2.map((list) => 
            <Flex alignItems={'center'}>
                <Image mr={2} height={3} src={require('../images/darkDot.png')}/>
                <Text fontFamily={'arvo-regular'} fontWeight={400}>{list.content}</Text>
                </Flex>
         )}
        </Flex>
        </Flex>
        <ViewAllServices/>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Tutoring;
