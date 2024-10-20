import Header from './Header';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import ViewAllServices from './ViewAllServices';
import Footer from './Footer';
const ELearning = () => {
  return (
    <Box background="linear-gradient(to left, rgba(131, 101, 142, 0.32) 10%, white 80%)">
      <Header />
      {/* <Flex></Flex> */}
      <Text
      textAlign={{xl:'left',md:'left', base:'center'}}
      px={'6%'}
            my={5}
            color={'#060668'}
            sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
            fontSize={31}
            fontWeight={800}
          >
            E-Learning Customization Services
          </Text>
      <Flex   px={{xl:10, md:10, base:6}} flexDirection={{xl:'row', md:'row', base:'column-reverse'}} justifyContent={'space-around'}>
        <Box >
          
          <Text fontFamily={'arvo-regular'} fontSize={{xl:20}}>
            <Text as={'span'} fontWeight={700} color={'#B72323'}>
              Vidyaa-Tech
            </Text>
            provides E-Learning Customization Services referring to a range of
            specialized solutions
            <Text>
              designed to adapt and tailor digital learning experiences to meet
              the specific needs of learners.{' '}
            </Text>
            <Text>
              These services aim to transform traditional educational methods
              into dynamic, engaging, and{' '}
            </Text>
            effective online learning environments.
          </Text>
        </Box>
       
        <Image
          width={250}
          height={200}
          mt={{xl:-10}}
          src={require('../images/ELearningSideImg.png')}
        />
      </Flex>
      <Box mt={{xl:0, base:5}} px={{xl:'6%'}} fontFamily={'arvo-regular'} fontSize={{xl:20, base:17}}>
        <Text   display={'flex'} flexDirection={{xl:'row', base:'column'}}>
        <Flex ml={1} alignItems={'center'}>
          <Image mr={2}  height={3} src={require('../images/greenDot.png')} />
            <Text fontWeight={700} fontSize={{xl:20, base:17}}  color={'#8BA92C'} as={'span'}>
              Custom Assessment Development - 
            </Text>{' '}
            </Flex>
            <Text ml={{xl:0,md:2, base:5}}>
            Our Assessment Services offer invaluable insights into students'
            strengths and weaknesses.</Text>
          </Text>{' '}
       
        <Text  ml={{base:5, md:2}}>
          Well-designed assessments enhance student engagement through
          interactive and challenging learning experiences.
        </Text>
      </Box>
     
          <Box overflowX="auto">
      <Box display="inline-block"  width={{xl:1800, base:1000}}>
        <Image
          align="center"
          p={{xl:8, base:'2'}}
          marginX={'auto'}
          width={{xl:'65%', base:'80%'}}
          src={require('../images/table3.png')}
          alt="Table Image"
        />
      </Box>
    </Box>
    <Box overflowX="auto">
      <Box display="inline-block"  width={{xl:1800, base:1000}}>
        <Image
          align="center"
          p={{xl:8, base:'2'}}
          marginX={'auto'}
          width={{xl:'65%', base:'80%'}}
          src={require('../images/table2.png')}
          alt="Table Image"
        />
      </Box>
    </Box>
    <Box overflowX="auto">
      <Box display="inline-block"  width={{xl:1800, base:1000}}>
        <Image
          align="center"
          // p={{xl:8, base:'2'}}
          marginX={'auto'}
          width={{xl:'65%', base:'80%'}}
          src={require('../images/table1.png')}
          alt="Table Image"
        />
      </Box>
    </Box>
      <Flex  p={{xl:10, md:8, base:'2'}} justifyContent={'space-around'}>
        
        <Box  ml={{xl:14}} fontFamily={'arvo-regular'} fontSize={{xl:20, base:15}}>
          <Text display={'flex'} flexDirection={{xl:'row', base:'column'}}>
          <Flex alignItems={'center'}>
            <Image mr={2} height={3} src={require('../images/greenDot.png')} />
              <Text fontWeight={700} color={'#8BA92C'} as={'span'}>
                Custom Curriculum Development -{' '}
              </Text>{' '}
              </Flex>
              The curriculum involves identifying learning objectives, selecting
              appropriate instructional
            </Text>{' '}
          <Text   ml={{xl:7}}>
            methods, and continuously assessing and updating the material to
            ensure it aligns with market trends, company goals, and the evolving
        needs of the sales force.</Text>
        </Box>
      </Flex>
      <Box fontFamily={'arvo-regular'} fontSize={{xl:18, base:15}} mx={{xl:'8%', md:'5%', base:'4%'}}>
      <Box mb={5}>
        <Text>
          Needs Analysis : We conduct a comprehensive needs analysis to identify
          the clients' educational objectives, target audience characteristics,{' '}
        </Text>
        <Text>and any specific requirements or constraints.</Text>
      </Box>
      <Box mb={5}>
        <Text>
          Curriculum Design : Based on the needs analysis, our instructional
          design team collaborates with subject matter experts and stakeholders
          to
          <Text>
            design a customized curriculum. This includes defining learning
            objectives, sequencing content, selecting instructional strategies,
            and{' '}
          </Text>
          <Text>identifying assessment methods.</Text>
        </Text>
      </Box>
      <Box mb={5}>
        <Text>
          Content Development : Our team develops engaging and interactive
          learning materials, including presentations, activities, assessments,{' '}
        </Text>
        <Text>
          and multimedia elements. We ensure that all content is aligned with
          the curriculum objectives and supports active learning
        </Text>
      </Box>
      <Box>
        <Text>
          Review and Revision : The curriculum undergoes multiple rounds of
          review and revision, with feedback incorporated from both the client{' '}
        </Text>
        <Text>and internal reviewers. </Text>
      </Box>
      </Box>
      <Flex  px={{xl:'6%', md:8, base:'2'}} mt={4}>
        <Box fontFamily={'arvo-regular'} fontSize={{xl:20, base:15}}>
        <Text display={'flex'} flexDirection={{xl:'row', base:'column'}}>
          <Flex alignItems={'center'}>
            <Image mr={2} height={3} src={require('../images/greenDot.png')} />
              <Text fontWeight={700} color={'#8BA92C'} as={'span'}>
                Custom Test Prepartion -{' '}
              </Text>{' '}
              </Flex>
              Vidyaa Tech provide a broad range of test preparation materials
              covering various subjects and standardized
            </Text>{' '}
  
          <Text ml={{xl:7}}>
            tests. This comprehensive approach ensures that students are
            well-prepared for all aspects of their exams.
          </Text>
          <Text ml={{xl:7}}>
             We offering high-quality, custom test preparation services can
            differentiate an e-learning provider in a competitive market.
          </Text>
          <Box mx={'4%'} mt={5}>
            <ul>
              <li>Content Analysis</li>
              <li>Resource Development</li>
              <li>Feedback and Improvement</li>
              <li>Performance Monitoring</li>
            </ul>
          </Box>
        </Box>
      </Flex>
      <Flex  p={{xl:12, md:8, base:'2'}} justifyContent={'space-around'}>
      <Box fontFamily={'arvo-regular'} fontSize={{xl:20, base:15}}>
      <Text display={'flex'} flexDirection={{xl:'row', base:'column'}}>
      <Flex alignItems={'center'}>
            <Image mr={2} height={3} src={require('../images/greenDot.png')} />
              <Text fontWeight={700} color={'#8BA92C'} as={'span'}>
                Custom Storyboard Creation -{' '}
              </Text>{' '}
              </Flex>
              We offer Storyboarding Development that includes designing and
              planning educational content,
            </Text>{' '}
        
          <Text ml={{xl:7}}>
            multimedia projects, and various forms of digital storytelling.
            Storyboarding Development is a foundational step in creating
            engaging and
          </Text>
          <Text ml={{xl:7}}>
            effective educational content, multimedia projects, or any digital
            storytelling effort. It helps visualize the end product and ensures
            that the{' '}
          </Text>
          <Text ml={{xl:7}}>
            content is well-organized, coherent, and impactful.
          </Text>
          <Box mx={'4%'} mt={5}>
            <ul>
              <li>Conceptualization</li>
              <li>Creating the Outline</li>
              <li>Visual Design</li>
              <li>Feedback and Revision</li>
            </ul>
          </Box>
        </Box>
      </Flex>
      <Flex  px={{xl:'5%', md:8, base:'2'}} justifyContent={'space-around'}>
      <Box fontFamily={'arvo-regular'} fontSize={{xl:20, base:15}}>
      <Text display={'flex'} flexDirection={{xl:'row', base:'column'}}>
          <Flex alignItems={'center'}>
            <Image  mr={2} height={3} src={require('../images/greenDot.png')} />
              <Text fontWeight={700} color={'#8BA92C'} as={'span'}>
                Custom Lesson Plans and Worksheets -{' '}
              </Text>{' '}</Flex>
              At Vidyaa Tech, we understand the importance of effective learning
              tools. Our lesson
              </Text>
          <Text ml={{xl:7}}>
            plans are meticulously crafted to ensure clarity and depth in each
            session, tailored to meet the specific needs of every student and
            educator. 
          </Text>
          <Box mb={6} mx={{xl:'4%', base:'2%'}} mt={5}>
            <ul mb={10} >
              <li>
                Template Selection: Choose from a variety of customizable
                templates based on your subject, grade level, and teaching
                style.
              </li>
              </ul>
              </Box>
              <Box mb={6} mx={{xl:'4%', base:'2%'}} mt={5}>
            <ul mb={10} >
              <li>
                Curriculum Alignment: Easily align your lesson plans with
                educational standards using built-in alignment tools.
              </li>
              </ul>
              </Box>
              <Box mb={6}  mx={{xl:'4%', base:'2%'}} mt={5}>
            <ul mb={10} >
              <li>
                Resource Integration: Access a comprehensive library of
                resources such as worksheets, multimedia content, and
                assessments to enrich your lessons.
              </li>
              </ul>
              </Box>
              <Box mb={6} mx={{xl:'4%', base:'2%'}} mt={5}>
            <ul mb={10} >
              <li>
                Collaboration and Feedback: Collaborate with colleagues by
                sharing lesson plans and receiving feedback to improve teaching
                strategies Our worksheet complements our lesson plans by
                offering practical exercises and activities that reinforce
                learning objectives. These  interactive resources are designed
                to enhance comprehension, encourage critical thinking, and
                promote independent learning skills for  students.
              </li>
            </ul>
            </Box>
        </Box>
      </Flex>
      <Flex mr={{xl:'12%'}}  p={{xl:10, md:8, base:'2'}}  justifyContent={'space-around'}>
      <Box  fontFamily={'arvo-regular'} fontSize={{xl:20, base:15}}>
      <Text   display={'flex'} flexDirection={{xl:'row', base:'column'}}>
          <Flex  alignItems={'center'}>
            <Image  mr={2} height={3} src={require('../images/greenDot.png')} />
              <Text fontWeight={700} color={'#8BA92C'} as={'span'}>
                Diversity, Equity, and Inclusion (DEI) Reviews -{' '}
              </Text>{' '} </Flex>
              We provide valuable services to you by offering comprehensive
              reviews and
         </Text><Text>
            assessments focused on Diversity, Equity, and Inclusion (DEI).
          </Text>
          <Box mx={{xl:'2%',md:'4%', base:'7%'}} mt={5} >
            <ul>
              <li>Initial Assessment</li>
              <li>Evaluation</li>
              <li>Implementation Support</li>
            </ul>
          </Box>
        </Box>
      </Flex>
      <Flex p={{xl:14, md:8, base:'2'}} justifyContent={'space-around'}>
      <Box  fontFamily={'arvo-regular'} fontSize={{xl:20, base:15}}>
      <Text   display={'flex'} flexDirection={{xl:'row', base:'column'}}>
          <Flex alignItems={'center'}>
            <Image mr={2} height={3} src={require('../images/greenDot.png')} />
              <Text fontWeight={700} color={'#8BA92C'} as={'span'}>
                Course Customization -{' '}
                </Text>
                </Flex>
              We offer a comprehensive course customization service designed to
              empower educators and enhance the
         </Text>
         
          <Text ml={{xl:7}} >
            learning experience.Our team works closely with educators to align
            course content with specific educational standards and objectives,
            ensuring that
          </Text>
          <Text  ml={{xl:7}}>
            each course is relevant and effective. We integrate engaging
            multimedia elements, such as videos and interactive quizzes to keep
            students{' '} motivated and involved.</Text>
          <Box ml={'3%'} mt={5}>
            <ul>
              <li>Initial Assessment</li>
              <li>Evaluation</li>
              <li>Implementation Support</li>
            </ul>
          </Box>
        </Box>
      </Flex>
      <ViewAllServices/>
      <Footer/>
    </Box>
  );
};
export default ELearning;
