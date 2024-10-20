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
const Editorial = () => {
  return (
    <Box  background="linear-gradient(to left, rgba(131, 101, 142, 0.32) 10%, white 80%)">
      <Header />
      <Box>
        <Text
          textAlign={{ xl: 'left', md: 'left', base: 'center' }}
          mt={5}
          mx={'8%'}
          fontWeight={800}
          fontSize={30}
          sx={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)' }}
          color={'#060668'}
        >
          Editorial Services
        </Text>
        <Flex
          mx={{ xl: '4%', md: '6%' }}
          flexDirection={{ xl: 'row', md: 'row', base: 'column-reverse' }}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Box>
            <Text
              width={{ xl: '85%' }}
              ml={5}
              fontSize={20}
              fontFamily={'arvo-regular'}
            >
              <Text as={'span'} color={'#B72323'} fontWeight={800}>
                Vidyaa Tech
              </Text>{' '}
              specialises in providing excellent editorial services that are
              customised to meet a variety of content {/* <Text> */}
              requirements. Our skilled editors can polish corporate reports,
              academic articles, and creative works to make {/* </Text> */}
              sure they are all comprehensible, captivating, and clear.
            </Text>
          </Box>
          <Image
            height={200}
            width={200}
            src={require('../images/editorialSideImg.png')}
          />
        </Flex>
      </Box>

      <Box fontFamily={'arvo-regular'} fontSize={20} mx={'5%'}>
        <Text>
          <Box>
            <Text
              ml={5}
              fontFamily={'arvo-regular'}
              fontSize={20}
              display={'flex'}
              flexDirection={{ xl: 'row', base: 'column' }}
            >
              <Flex alignItems={'center'}>
                <Box
                  mr={2}
                  bg={'#2A96CA'}
                  height={{ xl: 3, md: 4, base: 3 }}
                  width={{ xl: 3, md: 3, base: 3 }}
                  borderRadius={'50%'}
                />
                <Text as={'span'} color={'#2A96CA'} fontWeight={800}>
                  Content Fixing -
                </Text>{' '}
              </Flex>{' '}
              We improve the cohesion and clarity of drafts with our content
              correction service. Our aim is to enhance readability
            </Text>
            <Text mb={5} ml={5}>
              {' '}
              by tackling problems such as clumsy language, and repetition.
            </Text>
          </Box>
        </Text>
        <Box fontFamily={'arvo-regular'} fontSize={20} mx={'5%'}></Box>
        <Box>
          <Box>
            <Text
              ml={5}
              fontFamily={'arvo-regular'}
              fontSize={20}
              display={'flex'}
              flexDirection={{ xl: 'row', base: 'column' }}
            >
              <Flex alignItems={'center'}>
                <Box
                  mr={2}
                  bg={'#2A96CA'}
                  height={{ xl: 3, md: 4, base: 3 }}
                  width={{ xl: 3, md: 3, base: 3 }}
                  borderRadius={'50%'}
                />
                <Text as={'span'} color={'#2A96CA'} fontWeight={800}>
                  Proofreading -
                </Text>{' '}
              </Flex>{' '}
              The proofreading service focuses on removing flaws to ensure
              correctness and professionalism. Our crew thoroughly{' '}
            </Text>
            <Text mb={5} ml={5}>
              {' '}
              checks for grammatical, typographical, punctuation, and formatting
              flaws.
            </Text>
          </Box>

          <Box>
            <Text
              ml={5}
              fontFamily={'arvo-regular'}
              fontSize={20}
              display={'flex'}
              flexDirection={{ xl: 'row', base: 'column' }}
            >
              <Flex alignItems={'center'}>
                <Box
                  mr={2}
                  bg={'#2A96CA'}
                  height={{ xl: 3, md: 4, base: 3 }}
                  width={{ xl: 3, md: 3, base: 3 }}
                  borderRadius={'50%'}
                />
                <Text as={'span'} color={'#2A96CA'} fontWeight={800}>
                  Content Curating -
                </Text>{' '}
              </Flex>{' '}
              <Text>
                {' '}
                We create fresh, original content. By improving readability and
                adherence to academic conventions, Vidyaa Tech{' '}
              </Text>
            </Text>
          </Box>
          <Text mb={5} ml={5}>
            helps publishers enhance their reputation and credibility in the
            academic community.
          </Text>

          <Box>
            <Text
              ml={5}
              fontFamily={'arvo-regular'}
              fontSize={20}
              display={'flex'}
              flexDirection={{ xl: 'row', base: 'column' }}
            >
              <Flex alignItems={'center'}>
                <Box
                  mr={2}
                  bg={'#2A96CA'}
                  height={{ xl: 3, md: 4, base: 3 }}
                  width={{ xl: 3, md: 3, base: 3 }}
                  borderRadius={'50%'}
                />
                <Text as={'span'} color={'#2A96CA'} fontWeight={800}>
                  Book Indexing -
                </Text>{' '}
              </Flex>{' '}
              The book indexing service improves the usability and accessibility
              of your publications. We construct extensive
            </Text>
          </Box>
          <Text ml={5}>
            precise indexes that allow readers to swiftly access the information
            they require. Index systematically organizes the content of a book,{' '}
          </Text>
          <Text mb={5} ml={5}>
            allowing readers to swiftly locate specific topics, concepts, or
            references.
          </Text>

          <Box>
            <Text
              ml={5}
              fontFamily={'arvo-regular'}
              fontSize={20}
              display={'flex'}
              flexDirection={{ xl: 'row', base: 'column' }}
            >
              <Flex alignItems={'center'}>
                <Box
                  mr={2}
                  bg={'#2A96CA'}
                  height={{ xl: 3, md: 4, base: 3 }}
                  width={{ xl: 3, md: 3, base: 3 }}
                  borderRadius={'50%'}
                />
                <Text as={'span'} color={'#2A96CA'} fontWeight={800}>
                  Copy Editing -
                </Text>{' '}
              </Flex>{' '}
              Our copy editing service ensures that the material is clear,
              consistent, and engaging. We improve sentence structure,{' '}
            </Text>
          </Box>
          <Text mb={5} ml={5}>
            tone, and flow to make writing more persuasive and professional.
          </Text>
          {/* <Flex alignItems={'center'}> */}
          {/* <Box
            mr={2}
            bg={'#2A96CA'}
            height={{xl:3,md:4, base:3}}
            width={{xl:3,md:6, base:10}}
            borderRadius={'50%'}
          /> */}
          <Box>
            <Text
              ml={5}
              fontFamily={'arvo-regular'}
              fontSize={20}
              display={'flex'}
              flexDirection={{ xl: 'row', base: 'column' }}
            >
              <Flex alignItems={'center'}>
                <Box
                  mr={2}
                  bg={'#2A96CA'}
                  height={{ xl: 3, md: 4, base: 3 }}
                  width={{ xl: 3, md: 3, base: 3 }}
                  borderRadius={'50%'}
                />{' '}
                <Text as={'span'} color={'#2A96CA'} fontWeight={800}>
                  Typesetting -{' '}
                </Text>{' '}
              </Flex>{' '}
              Our typesetting service focuses on arranging text and graphics in
              a visually pleasing and readable manner. We ensure
            </Text>
          </Box>
          {/* </Flex> */}
          <Text ml={5}>
            that the documents are professionally formatted, with uniform fonts,
            spacing, and alignment. This service is essential for any{' '}
          </Text>
          <Text ml={5}>
            {' '}
            organization that creates printed or digital products like books,
            brochures, reports, and manuals.
          </Text>
        </Box>
      </Box>
      <ViewAllServices />
      <Footer />
    </Box>
  );
};
export default Editorial;
