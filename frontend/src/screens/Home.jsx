import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
} from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';



const Services = [
  {
    title: 'E-Learning Customization',
    image: require('../images/eLearn (1).png'),
    color: '#BAFFB19E',
    tilt: '8.11deg',
    height: '100',
    width: '160',
  },
  {
    title: 'Tutoring',
    image: require('../images/tutor.png'),
    color: '#FEFFA7B2',
    tilt: '-7.58deg',
    height: '87',
    width: '138',
  },
  {
    title: 'Alignment',
    image: require('../images/alignment.png'),
    color: '#D7E8F5B2',
    tilt: '-7.24deg',
    height: '78',
    width: '70',
    left: '10',
  },
  {
    title: 'Editorial',
    image: require('../images/editorial.png'),
    color: '#D6EBF9D4',
    tilt: '-9.14deg',
    height: '70',
    width: '70',
  },
  {
    title: 'Authoring',
    image: require('../images/authoring.png'),
    color: '#FFC7C7B2',
    tilt: '10.93deg',
    height: '87',
    width: '82',
  },
  {
    title: 'Translation',
    image: require('../images/translation.png'),
    color: '#FBDC87',
    tilt: '11.55deg',
    height: '100px',
    width: '165',
  },
];
const Determination = [
  {
    heading: 'OUR IDEOLOGY',
    text: 'We believe that education should be accessible, engaging, and tailored to the unique needs of each learner. Our mission is to harness cutting-edge technology to create innovative solutions that empower students and educators alike. By integrating interactive tools, personalized learning experiences, we aim to make learning inclusive.',
  },
  {
    heading: 'OUR COMMITMENTS',
    text: 'We are committed to providing exceptional service and support, ensuring that our solutions seamlessly integrate into educational frameworks. We value open communication and collaboration, working closely with our clients to understand their goals and challenges, and delivering solutions that drive success.  ',
  },
  {
    heading: 'OUR OBLIGATIONS',
    text: 'We are dedicated to ethical practices, transparency, and building lasting relationships based on trust and mutual respect. Our obligation extends to providing ongoing support and training, ensuring that both learners and educators can fully leverage our tools and resources. ',
  },
];

const Partners = [
  {
    image: require('../images/brainlyLogo.png'),
  },
  {
    image: require('../images/cheggLogo.png'),
  },
  {
    image: require('../images/hurixLogo.png'),
  },
  {
    image: require('../images/byjuLogo.png'),
  },
  {
    image: require('../images/carnegLogo.png'),
  },
  {
    image: require('../images/bankLogo.png'),
  },
  {
    image: require('../images/enotesLogo.png'),
  },
  {
    image: require('../images/bartleLogo.png'),
  },
  {
    image: require('../images/learnLogo.png'),
  },
  {
    image: require('../images/vedantuLogo (1).png'),
  },
  {
    image: require('../images/wileylogo.png'),
  },
  {
    image: require('../images/khanLogo.png'),
  },
  {
    image: require('../images/embibeLogo.png'),
  },
  {
    image: require('../images/digitalLogo.png'),
  },
  {
    image: require('../images/amazonLogo.png'),
  },
];

const Home = () => {
 
  return (
    <Box width={'100%'} borderColor="black" overflow="none">
      <Header/>

      <Box background="linear-gradient( to left, rgba(131, 101, 142, 0.32) 10%, white 80%)">
        <Flex flexWrap={'wrap'} justifyContent={'space-around'} px={50}>
          <Box>
            <Text
              fontFamily={'libreFranklin'}
              fontWeight={700}
              fontSize={30}
              color={'#DB3D3D'}
              marginTop={100}
            >
              Education is an ornament
            </Text>
            <Text
              fontFamily={'libreFranklin'}
              fontWeight={700}
              fontSize={30}
              color={'#5780DD'}
            >
              in prosperity and a refuge
            </Text>
            <Text
              fontFamily={'libreFranklin'}
              fontWeight={700}
              fontSize={30}
              color={'#077660'}
            >
              in adversity.
            </Text>
            <Text width={300} fontWeight={500}>
              Welcome to{' '}
              <Text as="span" color={'darkblue'} fontWeight={700}>
                Vidyaa Tech,{' '}
              </Text>
              a premier EdTech company dedicated to transforming the educational
              landscape through innovative and comprehensive solutions.
            </Text>
          </Box>

          <Box>
            <Image
              marginTop={100}
              resize={'contain'}
              width={330}
              height={300}
              src={require('../images/homeLogo.png')}
            />
          </Box>
        </Flex>
        <Box>
          <Image
            src={require('../images/Group 331.png')}
            marginTop={150}
            width={250}
            height={12}
            // resize={'contain'}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          textAlign={'center'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
            margin={10}
            fontSize={26}
            fontWeight={500}
          >
            About Us
          </Box>
          <Box textAlign={'left'} margin={10} fontWeight={700} fontFamily={'Arvo-Regular'}>
            <Text >
              At{' '}
              <Text color={'red'} fontWeight={700} as="span">
                Vidyaa Tech,{' '}
              </Text>
              we're revolutionizing education with our exceptional e-learning
              services and solutions designed to meet the
            </Text>
            <Text>
              {' '}
              diverse needs of today's learners. Our platform leverages
              cutting-edge technology to deliver a seamless, interactive
              learning experience{' '}
            </Text>
            <Text>
              {' '}
              that adapts to individual learning styles and preferences. With
              real-time feedback, engaging multimedia content, and personalized
            </Text>
            <Text>
              {' '}
              learning pathways. Our solutions aim to create engaging and
              interactive learning environments that cater to various learning
              styles and needs.
            </Text>
            <Text marginTop={5}>
              {' '}
              Our solutions often facilitate global access to high-quality
              education, breaking down geographical barriers and providing
              opportunities for{' '}
            </Text>
            learners in diverse locations. This global reach is particularly
            valuable in expanding educational access to underserved or remote
            areas.
            {/* </Box> */}
          </Box>
        </Box>
        <Box position={'relative'}>
          <Box
            width={{ base: '80%', lg: '72%', xl:'50%' }}
            marginX={{xl: 450, lg:55, base:10 }}
            marginY={10}
            color={'#317EBA'}
            fontWeight={'600'}
            fontSize={24}
            fontFamily={'noto-bold'}
          >
            Transform traditional education into a dynamic and immersive
            experience with Vidyaa Tech.
          </Box>
          <Image
          display={'flex'}
            position={'absolute'}
            right={0}
            bottom={{ lg: 10 }}
            justifyContent={'right'}
            src={require('../images/Group 148.png')}
            width={250}
            height={12}
          />
        </Box>
      </Box>
      <Flex
        flexDirection={{ lg: 'row', base: 'column' }}
        marginX={20}
        justifyContent={'space-between'}
      >
        <Box textAlign={'Center'}>
          <Flex
          flexDirection={{xl:'column', lg:'column', base:'row'}}
          // textAlign={{xl:'left', lg:'center', base:'center'}}
          textAlign={'center'}
          alignItems={'center'}
          justifyContent={'center'}
            // width={{ xl: 190, base: 300 }}
            width={'100%'}
            fontSize={{ lg: 38, base: 30 }}
            fontWeight={700}
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
            marginY={{ lg: 20, base: 10 }}
            fontFamily={'Abhaya Libre ExtraBold'}
          >
            <Text  textAlign={'center'} marginRight={{xl:65, base:3}} >Our</Text>
            <Text as={'span'}>Services</Text>
          </Flex>
          <Text
            // whiteSpace={'pre-line'}
            fontStyle={'italic'}
            color={' #BF1E3D'}
            // fontFamily={'noto-serif-semiBoldItalic'}
            fontWeight={500}
            fontSize={20}
            marginTop={{ xl: 170 }}
            marginBottom={{ base: 10 }}
            width={{xl:350}}

          >
            <Text >“Unlock the future with</Text>
            <Text> premier learning services</Text>
            <Text> where quality education pave the</Text>
            <Text> path to extraordinary achievement.”</Text>
          </Text>
        </Box>
        <Box>
          <Flex  justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'}>
            {Services.map((items, index) => {
              return (
                <Flex
                  marginBottom={10}
                  height={{xl:300, lg: 280, base: 230 }}
                  width={{xl:280, base:260}}
                  marginX={2}
                  backgroundRepeat={'no-repeat'}
                  backgroundSize={'contain'}
                  backgroundImage={require('../images/purpleBg.png')}
                  fontFamily={'libreFranklin'}
                  fontSize={10}
                  fontWeight={700}
                  key={index}
                  transformOrigin="center"
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Box
                    backgroundColor={items.color}
                    transform={`rotate(${items.tilt})`}
                    width={{xl:245, lg: 235, base: 180 }}
                    height={{xl:200, base: 160, md:200, sm:160}}
                    // margin={{md:10}}
                    marginBottom={{base:2,xl:10,lg:12, md:1}}
                    // margin={10}
                    rounded={'50'}
                    position={'absolute'}
                  />
                  <Flex
                    flexDirection={'column'}
                    // zIndex={1000}
                    borderColor={'black'}
                    position={'relative'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Image
                      src={items.image}
                      width={items.width}
                      height={items.height}
                    />
                    <Text
                      textAlign={'center'}
                      width={{ lg: 150, base: 120 }}
                      fontSize={{ lg: 16, base: 14 }}
                      marginBottom={{ base: 6 }}
                    >
                      {items.title}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
      <Box
        // borderWidth={2}
        // borderColor={'black'}
        background="linear-gradient( to left, rgba(131, 100, 142, 0.6) 50%, white 100%)"
        // height={500}
      >
        <Text
          fontFamily={'Abhaya Libre ExtraBold'}
          fontSize={{ xl: 35, base: 28 }}
          fontWeight={800}
          sx={{
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
          }} /* 0.25 is 25% opacity */
          textAlign={'center'}
          padding={10}
        >
          Our Determination is our Pride{' '}
        </Text>
        <Flex padding={1.5} flexWrap={'wrap'} pb={20} gap={6} justifyContent={"center"}>
          {Determination.map((item, index) => {
            return (
              <Box position={'relative'}>
                <Image
                  key={index}
                  margin={{ lg: 10, md:10 }}
                  height={{xl:400,md:600, base:400,lg:600}}
                  width={{ xl: 400, base: 600,lg:600}}
                  src={require('../images/bgFrame.png')}
                />
                <Box
                  position="absolute"
                  top = {{base:'20%', md:'22%'}}
                  backdropFilter={10}
                  fontWeight={600}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Text
                    fontSize={{ xl: 20, base: 16, md:32 }}
                    marginTop={{ xl: 8, base: 3 }}
                    // marginLeft={{lg:109}}
                    fontWeight={800}
                    textAlign={'center'}
                    
                    // marginLeft={{lg:'72%'}}
                    fontFamily={'Abhaya Libre ExtraBold'}
                    color={'#B72323'}
                  >
                    {item.heading}
                  </Text>
                  <Text
                    fontSize={{xl:13,base:13, md:20}}
                    // fontSize={12}
                    padding={2} 
                    width={{lg:"50%", base:"55%"}}
                    // width={{ xl: 250,lg:400, base: 250, md:400 }}
                    
                    // marginLeft={{lg:"50%", xl:130}}
                    textAlign={'left'}
                    fontFamily={'marmelad-regular'}
                  >
                    {item.text}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
      <Box position={'relative'}>
        <Box
          padding={10}
          height={'max-content'}
          background="linear-gradient( to left,rgba(213,205,221,255) 30%, rgba(235,219,227,255) 50%)"
        >
          <Text
            fontFamily={'Abhaya Libre ExtraBold'}
            fontWeight={800}
            fontSize={{ xl: 38, base: 28 }}
            position={'relative'}
            textAlign={{ xl: 'right', base: 'center' }}
            marginRight={{ xl: 380 }}
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Our Trusted Partners
          </Text>
          {/* <Flex justifyContent={'space-between'} alignContent={'center'}> */}
          <Box>
            <Grid
              marginLeft={{ xl: '30%'}}
              // marginLeft={{md:'10%'}}
              // width={'70%'}
              marginRight={{ xl: 140 }}
              marginTop={10}
              templateColumns={{ xl: 'repeat(3, 1fr)', md:'repeat(3, 1fr)', base:'repeat(2, 1fr)' }} // 3 equal columns
              // templateRows="repeat(4, 1fr)" // 4 equal rows
              gap={9} // Space between grid items
            >
              {Partners.map((item, index) => (
                <Image
                  cursor={'pointer'}
                  marginX={{ xl: 20 , md:14}}
                  key={index}
                  width={100}
                  src={item.image}
                />
              ))}
            </Grid>
          </Box>
          {/* </Flex> */}
        </Box>
        <Box
          zIndex={10}
          border={4}
          borderColor={'#35356F'}
          padding={20}
          background="conic-gradient(from 35.64deg at -31.94% 88.73%, #F8F8F8 0deg, #F9F9F9 0.04deg, rgba(131, 101, 142, 0.82) 48.6deg, #EDCFED 66.73deg, #CBA9A9 75.6deg, #FFD1D1 75.64deg, #EFFFFF 140.4deg, #F9F9F9 310.43deg, #F8F8F8 360deg)"
        >
          <Text
            fontFamily={'Abhaya Libre ExtraBold'}
            fontSize={35}
            fontWeight={800}
            color={{ xl: 'white' }}
            display={{ xl: 'block', base: 'none' }}
            marginLeft={{ xl: 550 }}
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
            css={{
              WebkitTextStroke: '.5px #7C7878', // Outline color and width (red)
            }}
          >
            Blog
          </Text>
          <Flex
            justifyContent={'space-around'}
            flexDirection={{ xl: 'row', md:'row', base: 'column' }}
          >
            
            <Image
              marginLeft={{ xl: 450 }}
              border="4px solid #35356F"
              padding={5}
              borderTopRightRadius="50"
              borderBottomLeftRadius="50"
              // rounded={10}
              height={{ xl: 350 }}
              width={{xl:400,lg:350, md:280}}
              display={{xl:'block', lg:'block', md:'block', base:'none'}}
              // border={1}
              src={require('../images/contact.png')}
            />

            <Box>
              <Flex
                sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
                fontFamily={'Abhaya Libre ExtraBold'}
                fontWeight={800}
                fontSize={{ xl: 35, base: 25 }}
                textAlign={{ base: 'center' }}
                marginTop={{ base: 5 , md:20}}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={{ xl: 'column'}}
              >
                <Text marginRight={{ base: 2 }}>Work </Text>
                <Text
                  marginBottom={{ xl: 20 }}
                  sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
                  fontFamily={'Abhaya Libre ExtraBold'}
                  fontWeight={800}
                  fontSize={{ xl: 35, base: 25 }}
                  textAlign={{ base: 'center' }}
                >
                  with us!
                </Text>
              </Flex>
              <Image
                cursor={'pointer'}
                height={{ xl: 58, base: 10 }}
                width={{ xl: 197 }}
                marginY={{ base: 5 }}
                marginX={{ base: 'auto' }}
                src={require('../images/connect.png')}
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Image
            left={0}
            top={3}
            height={800}
            position={'absolute'}
            display={{ xl: 'Block', base: 'none' }}
            src={require('../images/girl.png')}
          />
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Home;
//#e5d4de
