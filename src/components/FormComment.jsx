/* eslint-disable react/prop-types */
import { Box, Button, Input, Textarea } from "@chakra-ui/react";

export default function FormComment({input, handleChange, handleSubmit}) {

  return (
    <Box w='100%' h='100%'>
        <Input w='100%' name='username' value={input.username} onChange={handleChange} h='20%' variant='filled' border='1px' bg='white' fontSize='xs' placeholder='Username . . .' />
        <Textarea w='100%' name='comment' value={input.comment} onChange={handleChange} h='45%' variant='filled' border='1px' resize='block' bg='white' fontSize='xs' my='2' placeholder='Comments . . .' />
        <Button w='100%' h='20%' bg='purple.600' color='white' fontSize='xs' onClick={handleSubmit} _hover={{bg: 'purple.500'}}>
            Submit
        </Button>
    </Box>
  )
}
