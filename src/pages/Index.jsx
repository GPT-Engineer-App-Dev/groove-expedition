import { Box, Flex, Heading, Text, Image, VStack, HStack, Link, Button } from '@chakra-ui/react';
import { FaCalendarAlt, FaImages, FaNewspaper } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" justifyContent="space-between" p={4} bg="gray.800" color="white">
        <Heading size="lg">BandName</Heading>
        <HStack spacing={4}>
          <Link href="#tour-dates"><Button leftIcon={<FaCalendarAlt />}>Tour Dates</Button></Link>
          <Link href="#gallery"><Button leftIcon={<FaImages />}>Gallery</Button></Link>
          <Link href="#news"><Button leftIcon={<FaNewspaper />}>News</Button></Link>
        </HStack>
      </Flex>
      <Box id="tour-dates" p={4}>
        <Heading size="md" mb={2}>Tour Dates</Heading>
        <Text>No upcoming tours.</Text>
      </Box>
      <Box id="gallery" p={4}>
        <Heading size="md" mb={2}>Gallery</Heading>
        <Flex wrap="wrap" justifyContent="center">
          <Image src="https://via.placeholder.com/150" m={1} />
          <Image src="https://via.placeholder.com/150" m={1} />
          <Image src="https://via.placeholder.com/150" m={1} />
        </Flex>
      </Box>
      <Box id="news" p={4}>
        <Heading size="md" mb={2}>Latest News</Heading>
        <Text>No news at the moment.</Text>
      </Box>
    </Box>
  );
};

export default Index;