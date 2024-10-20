import {
    Box,
    Flex,
    Image,
    Text,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const services = [
    {
      img: require('../images/translationService.png')
    },
    {
      img: require('../images/alignmentService.png')
    },
    {
      img: require('../images/tutoringService.png')
    },
    {
      img: require('../images/editorialService.png')
    },
    {
      img: require('../images/elearninggService.png')
    },
    {
      img: require('../images/authoringService.png')
    }
  ];
 
const ViewAllServices = () =>{
    const navigate = useNavigate();
    const handleNavigate = (id) =>{
        if(id === 0)
            navigate('/services/translation')
        if(id === 1)
            navigate('/services/alignment')
        if(id === 2)
            navigate('/services/tutoring')
        if(id === 3)
            navigate('/services/editorial')
        if(id === 4)
            navigate('/services/learning')
        if(id === 5)
            navigate('/services/authoring')
      };
    return(
        <Box>
             <Box m={10}>
          <Text fontFamily={'Abhaya Libre ExtraBold'} color={'#010155'} sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }} mt={24} fontWeight={800} textAlign={'center'} fontSize={30}>
            View all Services
          </Text>
          <Flex flexWrap={'wrap'} ml={{md:'15%', sm:'-10%', xl:'0'}} width={{md:'60%',sm:'100%', xl:'100%' }} flexDirection={{xl:'row', md:'row', sm:'row',base:'column'}} mt={10} justifyContent={'space-around'}>
            {services.map((service, index) => (
              <Image key={index} onClick={() => handleNavigate(index)} cursor={'pointer'} marginLeft={{base:'23%', md:'10%', xl:0}} marginBottom={{base:'10'}} height={160} width={150} src={service.img} />
            ))}
          </Flex>
        </Box>
        <Box sx={{   // Full width
        background: 'conic-gradient(from 112.38deg at 46.98% 28.17%, #697597 0deg, #AFC3FC 97.83deg, #AFC3FC 179.23deg, #B0C4FD 190.8deg, #697597 360deg)',
      }} padding={'6%'} mb={'3%'}>
        <Flex justifyContent={'space-around'}>
        <Text fontWeight={700} fontSize={35} textAlign={'center'} color={'#010155'} sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }} ><Text>Join Us and Shape </Text>
        the Future Together!</Text>
        <Image marginTop={{xl:0, md:0, sm: 1, base:12}} height={120} width={120} src={require('../images/handshaking.png')}/>
        </Flex>
        </Box>
        </Box>
    )
}
export default ViewAllServices;