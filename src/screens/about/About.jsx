import { pointer } from '@testing-library/user-event/dist/cjs/pointer/index.js';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import {
  Box,
  Center,
  color,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
const frames = [
  {
    title: 'Budget Friendly',
    img: require('../../images/budgetFriendly.png'),
  },
  {
    title: 'Feedback',
    img: require('../../images/feedback.png'),
  },
  {
    title: 'Implementation',
    img: require('../../images/feedback.png'),
  },
  {
    title: 'Empowered Employ',
    img: require('../../images/empoweredEmploy.png'),
  },
  {
    title: 'Client-Centric',
    img: require('../../images/clientCentric.png'),
  },
  {
    title: 'Integrity',
    img: require('../../images/integrity.png'),
  },
];

const weDo = [
  {
    title: 'We Aspire ',
    text: 'We aspire to be a transformative force in the educational technology landscape, continuously pushing the boundaries of innovation to enhance learning experiences globally. Through our relentless pursuit of innovation, we aspire to make a lasting impact on education, inspiring learners and educators.',
    frame: require('../../images/scrapedBlueFrame.png'),
  },
  {
    title: 'We Embrace Inclusivity',
    text: 'Our team actively works to identify and address barriers to education, incorporating feedback from a wide range of users to continually improve and tailor our offerings. At Vidyaa Tech, embracing inclusivity means championing educational equity and striving to make a meaningful impact in the lives of learners and educators around the world.',
    frame: require('../../images/scrapedYellowFrame.png'),
  },
  {
    title: 'We Adhere',
    text: 'We adhere to the highest standards of excellence in every aspect of our service, from support to timely delivery. We adhere to rigorous timelines in our project management and delivery processes. We implement thorough planning and quality control measures throughout the development and deployment stages.',
    frame: require('../../images/scrapedYellowFrame.png'),
  },
  {
    title: 'We Support',
    text: 'By fostering a supportive and collaborative environment, we aim to build lasting relationships and contribute to the overall success and satisfaction of our clients. Vidyaa Tech aims to foster a positive and productive experience for all learners, reinforcing our commitment to excellence and client satisfaction in every aspect of our service.',
    frame: require('../../images/scrapedBlueFrame.png'),
  },
];
const team = [
  {
    name: 'Mr. Ankkit Parmar',
    title: ' Ceo & Founder',
    img: require('../../images/ankitParmar.png'),
  },
  {
    name: 'Mr. Siddhant Dwivedi',
    title: ' Head of Operations',
    img: require('../../images/siddhartD.png'),
  },
  {
    name: 'Mr. Akash Agarwal',
    title: 'Head of Quality',
    img: require('../../images/AkashA.png'),
  },
];
const About = () => {
  return (
    <Box width={'100%'}>
      <Header />
      <Box
        height={'max-content'}
        background="linear-gradient( to left, rgba(131, 101, 142, 0.32) 10%, white 80%)"
      >
        <Text
          css={{
            WebkitTextStroke: '.5px #FECDCD', // Outline color and width (red)
          }}
          fontFamily={'Abhaya Libre ExtraBold'}
          fontWeight={800}
          color={'#010155'}
          fontSize={35}
          sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
          border={1}
          borderColor={'FECDCD'}
          textAlign={'center'}
          padding={5}
        >
          About
        </Text>
        <Text fontFamily={'arvo-regular'} fontWeight={700} fontSize={20} marginX={'7%'}>
          <Text margin={3}>
            <Text color={'#D64751'} fontWeight={700} fontSize={20} as={'span'}>
              Vidyaa Tech
            </Text>{' '}
            provides a robust educational experience that combines expert
            knowledge with innovative learning solutions.{' '}
          </Text>
          <Text margin={3}>
            Our comprehensive suite of services includes interactive digital
            content, personalized learning tools, and robust support systems,
            all crafted to meet the diverse needs of students and educators. Our
            e-learning solutions are backed by a team of top-tier subject matter
            experts who bring unparalleled knowledge and passion to every
            project. Our team of experts with prestigious educational
            backgrounds and extensive experience in the field, ensuring that
            every piece of content we create is both authoritative and engaging.
          </Text>
          <Text margin={3}>
            We take pride in our dedication to delivering reliable, effective,
            and accessible educational solutions, and our unwavering commitment
            to excellence is reflected in the trust our clients.{' '}
          </Text>
          <Text margin={3}>
            As a trusted partner in education, we are committed to upholding the
            highest standards of excellence and integrity in all that we do. Our
            team’s dedication to high standards and continuous improvement
            underscores our commitment to delivering exceptional educational
            experiences.
          </Text>
        </Text>
        <Box display="flex" justifyContent="right" paddingY={5}>
          <Image
            src={require('../../images/Group 148.png')}
            alt="Description" // Always add alt text for accessibility
            width={250} // Adjust width as needed
            height={'auto'} // Maintain aspect ratio
          />
        </Box>
      </Box>
      <Box
        bg={
          'conic-gradient(from 202.89deg at 70.1% 52.4%, #43476C -187.2deg, #F8E78D 118.8deg, #43476C 172.8deg, #F8E78D 478.8deg)'
        }
      >
        <Text
          color={'#010155'}
          css={{
            WebkitTextStroke: '.5px #FECDCD', // Outline color and width (red)
          }}
          textAlign={'center'}
          padding={5}
          sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
          fontSize={35}
          fontWeight={800}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          Why choose us?
        </Text>
        <Flex justifyContent={'space-around'}>
          <Flex
            width={{ xl: '40%', md: '60%' }}
            marginX={{ xl: 20, lg: 160, md: 150, base: 100 }}
            justifyContent={'space-between'}
            flexWrap={'wrap'}
            alignItems={'center'}
            flexDirection={{ xl: 'row', lg: 'row', md: 'row', base: 'column' }}
          >
            {frames.map((item, index) => {
              return (
                <Box key={index} height={200}>
                  <Image height={170} width={170} src={item.img} />
                </Box>
              );
            })}
          </Flex>
          <Box>
            <Image
              display={{ xl: 'block', lg: 'block', base: 'none' }}
              height={338}
              width={380}
              position={'relative'}
              top={'20%'}
              right={'5%'}
              src={require('../../images/redGirl.png')}
            />
          </Box>
        </Flex>
      </Box>

      <Box
        height={{ xl: 810, base: 'max-content' }}
        background="linear-gradient( to left, rgba(131, 101, 142, 0.32) 90%, white 100%)"
      >
        <Flex
          paddingX={{ xl: 20, lg: 10, md: 5 }}
          justifyContent={'space-between'}
        >
          <Box>
            <Image
              margin={5}
              height={830}
              display={{ xl: 'block', base: 'none' }}
              src={require('../../images/girlWithPage.png')}
            />
          </Box>
          <Flex marginY={9} flexWrap={'wrap'} justifyContent={'space-around'}>
            {weDo.map((item, index) => {
              return (
                <Box
                  key={index}
                  backgroundImage={item.frame}
                  backgroundRepeat={'no-repeat'}
                  backgroundSize={'contain'}
                  width={{ xl: 370, lg: 360, md: 320, base: 370 }}
                  marginBottom={{ md: 6 }}
                  height={{ xl: 370, lg: 370, md: 300, base: 420 }}
                  fontSize={{ xl: 15, md: 12 }}
                >
                  <Text
                    marginTop={{ xl: 12, base: 10 }}
                    marginBottom={{ md: 3, base: 3 }}
                    sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    fontFamily={'Aleo'}
                    fontWeight={700}
                    fontSize={{ xl: 25, base: 20 }}
                    textAlign={'center'}
                  >
                    {item.title}
                  </Text>
                  <Text
                    width={{ md: 200, lg: 210, xl: 260, base: 260 }}
                    marginLeft={'16%'}
                    fontFamily={'marmelad-regular'}
                    fontWeight={600}
                  >
                    {item.text}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Image
          paddingX={{ xl: 20 }}
          alignItems={'center'}
          width={'80%'}
          marginX={'auto'}
          marginY={10}
          src={require('../../images/deliverGraph.png')}
        />
      </Box>
      <Box
        background={
          'conic-gradient(from 35.64deg at -31.94% 88.73%, #F8F8F8 0deg, #F9F9F9 0.04deg, #786779 45deg, #EDCFED 66.73deg, #CBA9A9 75.6deg, #FFD1D1 75.64deg, #EFFFFF 140.4deg, #F9F9F9 310.43deg, #F8F8F8 360deg)'
        }
      >
        <Text
          css={{
            WebkitTextStroke: '.5px ##F5C7C7', // Outline color and width (red)
          }}
          padding={8}
          textAlign={'center'}
          fontWeight={800}
          fontSize={38}
          color={{xl:'#F2F2F9', lg:'#F2F2F9', md:'black'}}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          Meet Our Team!
        </Text>
        <Flex marginX={{xl:20, md:10}} flexDirection={{xl:'row',md:'column', base:'column'}}  justifyContent={'space-between'}>
          {team.map((item, index) => {
            return (
              <Box margin={2} key={index}>
                <Image margin={{md:'auto', base:'auto'}} height={315} width={330} src={item.img} />
                <Text
                  textAlign={'center'}
                  margin={5}
                  fontFamily={'Atkinson Hyperlegible'}
                  fontWeight={800}
                  fontSize={22}
                >
                  <Text>{item.name}</Text>
                  <Text>{item.title}</Text>
                </Text>
              </Box>
            );
          })}
        </Flex>
        <Flex justifyContent={'center'}>
          <Image
            cursor={'pointer'}
            margin={10}
            height={20}
            width={{xl:280, lg:260, md:200}}
            src={require('../../images/connectWithUs.png')}
          />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
export default About;
