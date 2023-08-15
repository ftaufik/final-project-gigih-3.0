/* eslint-disable react/prop-types */
import { Box, Heading, Text } from "@chakra-ui/react";

export default function CommentCard({username, comment}) {
  return (
    <Box w='100%' h='-moz-max-content' px='2' my='3'>
        <Heading fontSize='sm' fontWeight='bold' my='0'>{username}</Heading>
        <Text fontSize='sm'textAlign='justify'>{comment}</Text>
    </Box>
  )
}
