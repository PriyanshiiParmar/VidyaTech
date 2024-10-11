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
const Service = [
  {
    img: require('../../images/learningWithBg.png'),
    id: 'e-learning',
  },
  {
    img: require('../../images/editorailWithBg.png'),
    id: 'editorial',
  },

  {
    img: require('../../images/tutoringWithBg.png'),
    id: 'tutoring',
  },
  {
    img: require('../../images/authoringWithBg.png'),
    id: 'authoring',
  },
  {
    img: require('../../images/alignmentWithBg.png'),
    id: 'alignment',
  },
  {
    img: require('../../images//translationWithBg.png'),
    id: 'translation',
  },
];

const Services = () => {
  //   const scrollRef = useRef(null);
  return (
    <Box background="linear-gradient( to left, rgba(131, 101, 142, 0.32) 10%, white 80%)">
      <Header />
      <Flex
        flexDirection={{ xl: 'row', lg: 'row', md: 'row', base: 'column' }}
        justifyContent={'space-around'}
        margin={20}
      >
        <Box>
          <Text
            textAlign={{ base: 'center' }}
            color={'#060668'}
            fontSize={'40'}
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
            fontWeight={700}
          >
            OUR SERVICES
          </Text>
          <Image
            display={{ xl: 'block', lg: 'block', md: 'block', base: 'none' }}
            marginY={10}
            width={{ xl: 360, lg: 320, md: 370 }}
            height={{ xl: 300, lg: 240 }}
            src={require('../../images/girlWithBooks.png')}
          />
        </Box>
        <Flex
          justifyContent={{
            xl: 'space-between',
            lg: 'space-between',
            base: 'center',
          }}
          width={{ xl: '40%', lg: '60%', md: '100%', base: '100%' }}
          flexWrap={'wrap'}
        >
          {Service.map((item, index) => {
            return (
              <Image
                onClick={() => {
                  const getElementId = document.getElementById(item.id);
                  getElementId.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                margin={{ md: 2 }}
                marginBottom={{base:10}}
                key={index}
                width={{ xl: 150, lg: 150, md: 120 }}
                height={{ xl: 190, lg: 190, md: 160 }}
                src={item.img}
                cursor={'pointer'}
              />
            );
          })}
        </Flex>
      </Flex>
      <Box padding={5} background={'rgba(212,203,220,255)'} id="e-learning">
        <Text
          paddingTop={7}
          fontWeight={800}
          fontSize={30}
          marginLeft={'23%'}
          css={{
            WebkitTextStroke: '.5px #FBC0C0', // Outline color and width (red)
          }}
          color={'#010155'}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          E-learning Customization
        </Text>
        <Flex
          flexDirection={{
            xl: 'row',
            lg: 'row',
            md: 'row',
            base: 'column-reverse',
          }}
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'space-around'}
          marginX={'5%'}
        >
          <Text fontSize={18} textAlign={'left'} fontFamily={'arvo-regular'}>
            <Text>
              We provides E-Learning Customization Services referring to a range
              of specialized solutions
            </Text>
            <Text>
              designed to adapt and tailor digital learning experiences to meet
              the specific needs of learners.
            </Text>
            <Text>
              These services aim to transform traditional educational methods
              into dynamic, engaging, and{' '}
            </Text>
            effective online learning environments.
          </Text>
          <Image
            width={220}
            height={230}
            src={require('../../images/learnCustomImage.png')}
          />
        </Flex>
        <Image
          height={58}
          width={170}
          marginLeft={'28%'}
          marginTop={{ base: 5 }}
          src={require('../../images/learMoreBtn (1).png')}
          cursor={'pointer'}
        />
      </Box>
      <Box
        paddingY={9}
        marginY={20}
        background={'rgba(212,203,220,255)'}
        id="editorial"
      >
        <Text
          paddingTop={7}
          fontWeight={800}
          fontSize={30}
          marginLeft={{ xl: '55%', lg: '54%', md: '54%', base: '20%' }}
          marginBottom={{ xl: '-2%', lg: '-2%', md: '-2%', base: 10 }}
          css={{
            WebkitTextStroke: '.5px #FBC0C0', // Outline color and width (red)
          }}
          color={'#010155'}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          Editorial Services
        </Text>
        <Flex
          flexDirection={{ xl: 'row', lg: 'row', md: 'row', base: 'column' }}
          marginX={10}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Image
            marginTop={-20}
            height={300}
            src={require('../../images/editorialServicesImg.png')}
          />
          <Box>
            <Text fontSize={18} textAlign={'left'} fontFamily={'arvo-regular'}>
              {' '}
              <Text>
                We offer comprehensive editorial services to ensure your
                educational content is accurate, clear, and engaging.{' '}
              </Text>
              Our team of experienced editors works meticulously to polish your
              materials to the highest standards.
            </Text>
          </Box>
        </Flex>
        <Image
          height={58}
          width={170}
          marginLeft={{ xl: '58%', lg: '59%', md: '58%', base: '29%' }}
          marginTop={{ base: 5 }}
          src={require('../../images/learMoreBtn (1).png')}
          cursor={'pointer'}
        />
      </Box>
      <Box padding={5} background={'rgba(212,203,220,255)'} id="tutoring">
        <Text
          paddingTop={7}
          fontWeight={800}
          fontSize={30}
          marginLeft={'23%'}
          css={{
            WebkitTextStroke: '.5px #FBC0C0', // Outline color and width (red)
          }}
          color={'#010155'}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          Tutoring
        </Text>
        <Flex
          flexDirection={{
            xl: 'row',
            lg: 'row',
            md: 'row',
            base: 'column-reverse',
          }}
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'space-around'}
          marginX={'5%'}
        >
          <Text fontSize={18} textAlign={'left'} fontFamily={'arvo-regular'}>
            <Text>
              We offer personalized tutoring services to support learners at
              various levels. Our qualified tutors provide one-on-one and
            </Text>
            <Text>
              group sessions to help students achieve their academic goals.
            </Text>
          </Text>
          <Image
            width={220}
            height={230}
            src={require('../../images/tutoringImg.png')}
          />
        </Flex>
        <Image
          height={58}
          width={170}
          marginLeft={'20%'}
          marginTop={{ base: 5 }}
          src={require('../../images/learMoreBtn (1).png')}
          cursor={'pointer'}
        />
      </Box>
      <Box
        paddingY={9}
        marginY={20}
        background={'rgba(212,203,220,255)'}
        id="authoring"
      >
        <Text
          paddingTop={7}
          fontWeight={800}
          fontSize={30}
          marginLeft={{ xl: '55%', lg: '54%', md: '54%', base: '20%' }}
          marginBottom={{ xl: '-2%', lg: '-2%', md: '-2%', base: 10 }}
          css={{
            WebkitTextStroke: '.5px #FBC0C0', // Outline color and width (red)
          }}
          color={'#010155'}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          Authoring Services
        </Text>
        <Flex
          flexDirection={{ xl: 'row', lg: 'row', md: 'row', base: 'column' }}
          marginX={10}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Image
            marginTop={-20}
            height={300}
            src={require('../../images/authoringImg.png')}
          />
          <Box>
            <Text fontSize={18} textAlign={'left'} fontFamily={'arvo-regular'}>
              {' '}
              <Text>
                Our authoring services help you create high-quality educational
                content from scratch. Our team of skilled authors and{' '}
              </Text>
              subject matter experts collaborate with you to develop engaging
              and informative materials tailored to your needs.
            </Text>
          </Box>
        </Flex>
        <Image
          height={58}
          width={170}
          marginLeft={{ xl: '58%', lg: '59%', md: '58%', base: '29%' }}
          marginTop={{ base: 5 }}
          src={require('../../images/learMoreBtn (1).png')}
          cursor={'pointer'}
        />
      </Box>
      <Box padding={5} background={'rgba(212,203,220,255)'} id="alignment">
        <Text
          paddingTop={7}
          fontWeight={800}
          fontSize={30}
          marginLeft={'23%'}
          css={{
            WebkitTextStroke: '.5px #FBC0C0', // Outline color and width (red)
          }}
          color={'#010155'}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          Alignment Services
        </Text>
        <Flex
          flexDirection={{
            xl: 'row',
            lg: 'row',
            md: 'row',
            base: 'column-reverse',
          }}
          alignItems={'center'}
          textAlign={'center'}
          justifyContent={'space-around'}
          marginX={'5%'}
        >
          <Text fontSize={18} textAlign={'left'} fontFamily={'arvo-regular'}>
            <Text>
              Our alignment services ensure that your educational content is
              consistent with curriculum standards and learning objectives.
            </Text>
            <Text>
              Our expert team works closely with you to align your content with
              the specific goals of your educational programs.
            </Text>
          </Text>
          <Image
            width={220}
            height={230}
            src={require('../../images/alignmentImg.png')}
          />
        </Flex>
        <Image
          height={58}
          width={170}
          marginLeft={'20%'}
          marginTop={{ base: 5 }}
          src={require('../../images/learMoreBtn (1).png')}
          cursor={'pointer'}
        />
      </Box>
      <Box
        paddingY={9}
        marginY={20}
        background={'rgba(212,203,220,255)'}
        id="translation"
      >
        <Text
          paddingTop={7}
          fontWeight={800}
          fontSize={30}
          marginLeft={{ xl: '55%', lg: '54%', md: '54%', base: '20%' }}
          marginBottom={{ xl: '-2%', lg: '-2%', md: '-2%', base: 10 }}
          css={{
            WebkitTextStroke: '.5px #FBC0C0', // Outline color and width (red)
          }}
          color={'#010155'}
          fontFamily={'Abhaya Libre ExtraBold'}
        >
          Translation Services
        </Text>
        <Flex
          flexDirection={{ xl: 'row', lg: 'row', md: 'row', base: 'column' }}
          marginX={10}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Image
            marginTop={-20}
            height={300}
            src={require('../../images/translationImg.png')}
          />
          <Box>
            <Text fontSize={18} textAlign={'left'} fontFamily={'arvo-regular'}>
              {' '}
              <Text>
                We provide professional translation services to make your
                educational content accessible to a global audience.{' '}
              </Text>
              Our expert translators ensure that your materials retain their
              accuracy and impact across different languages.
            </Text>
          </Box>
        </Flex>
        <Image
          height={58}
          width={170}
          marginLeft={{ xl: '58%', lg: '59%', md: '58%', base: '29%' }}
          marginTop={{ base: 5 }}
          src={require('../../images/learMoreBtn (1).png')}
          cursor={'pointer'}
        />
      </Box>
      <Box
        marginTop={-20}
        background={
          'conic-gradient(from 35.64deg at -31.94% 88.73%, #F8F8F8 0deg, #F9F9F9 0.04deg, #786779 45deg, #EDCFED 66.73deg, #CBA9A9 75.6deg, #FFD1D1 75.64deg, #EFFFFF 140.4deg, #F9F9F9 310.43deg, #F8F8F8 360deg)'
        }
      >
        <Flex alignItems={'center'} justifyContent={'space-around'}>
          <Box
            margin={10}
            css={{
              WebkitTextStroke: '1px #F3616199', // Outline color and width (red)
            }}
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            <Text fontWeight={700} fontSize={35}>
              <Text>Work</Text>
              <Text>with us!</Text>
            </Text>
            <Image
              width={190}
              marginY={10}
              height={58}
              cursor={'pointer'}
              src={require('../../images/letsConnectBlue.png')}
            />
          </Box>
          <Image
            display={{ xl: 'block', base: 'none' }}
            height={410}
            width={530}
            src={require('../../images/handShake.png')}
          />
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
export default Services;
