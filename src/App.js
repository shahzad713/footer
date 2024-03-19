import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  Text,
  Divider,
  Stack,
} from '@chakra-ui/react';

const App = () => {
  return (
    <Box
      className=""
      bg={'rgb(9, 8, 8)'}
      padding={'40px'}
      maxW={'1200px'}
      margin={'auto'}
      color={'white'}
      borderWidth="1px"
      borderRadius={'30px'}
      fontFamily={'sans-serif'}
      width={'100%'}
    >
      <Flex
        direction="row"
        gap={'3rem'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          flexDirection="column"
          width={'50%'}
          alignItems={'start'}
        >
          <Image
            w={'5rem'}
            h={'5rem'}
            alt="Message Icon"
            src="data:image/png;base64,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"
            className="chakra-image css-15o47s5"
          />
          <Text fontSize={'3.75rem'} marginY={'2rem'}>
            Keep up with the latest
          </Text>
          <Text fontSize={'1.25rem'}>
            Join our newsletter to stay up to date on features and releases.
          </Text>
        </Box>
        <Box width={'50%'} textAlign={'center'}>
          <Text fontSize={'1.5rem'} marginBottom={'1rem'} fontWeight={'700'}>
            Stay up to date
          </Text>
          <Stack direction="row" gap={'1rem'} alignItems={'center'}>
            <Input
              placeholder="Enter Your email"
              width={'100%'}
              height={'3rem'}
              fontSize={'1.125rem'}
              paddingInline={'1rem'}
              borderRadius={'100px'}
              minWidth={'0px'}
              outline={'none'}
              border={'none'}
            />
            <Button
              type="button"
              bg={'#5235E8'}
              color={'white'}
              borderRadius={'100px'}
              outline={'none'}
              border={'none'}
              minWidth={'160px'}
              fontSize={'1.25rem'}
              paddingY={'1rem'}
            >
              Subscribe
            </Button>
          </Stack>
          <Text marginTop={'2rem'} fontSize={'1.25rem'}>
            By subscribing you agree with our Privacy Policy
          </Text>
        </Box>
      </Flex>
      {/* <Divider marginY={4}  /> */}
      <hr style={{ marginTop: '40px' }} />
      <Flex
        marginTop={'90px'}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          direction={'column'}
          width={'30%'}
          justifyContent="center"
          alignItems="start"
          paddding={'20px'}
        >
          <Stack
            direction="row"
            alignItems="center"
            marginBottom={'1rem'}
            // gap={'0.5rem'}
          >
            <Image
              alt="logo"
              src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_0_457)'%3e%3cmask%20id='mask0_0_457'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='40'%20height='40'%3e%3cpath%20d='M40%200H0V40H40V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_0_457)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20%200H0L20%2020H0L20%2040H40L20%2020H40L20%200Z'%20fill='%235235E8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_457'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              className="chakra-image css-1d5wfwy"
            />
            <Text fontSize={'1.875rem'}>IQTEST.ai</Text>
          </Stack>
          <Text color={'gray'} fontSize={'1.25rem'}>
            Test your IQ in a very easy and simple step not complex.
          </Text>
        </Flex>
        <Flex justifyContent="space-between" width={'50%'}>
          <Stack direction="column">
            <Text>IQTEST</Text>
            <a href="/start-test" target="" style={{ textDecoration: 'none' }}>
              <Text color={'gray'}>Quiz</Text>
            </a>
            <a
              href="/test-history"
              target=""
              style={{ textDecoration: 'none' }}
            >
              <Text color={'gray'}>Results</Text>
            </a>
            <a href="/pricing" target="" style={{ textDecoration: 'none' }}>
              <Text color={'gray'}>Pricing</Text>
            </a>
          </Stack>
          <Stack direction="column">
            <Text> Support</Text>
            <a href="/" target="" style={{ textDecoration: 'none' }}>
              <Text color={'gray'}>Help</Text>
            </a>
            <a href="/" target="" style={{ textDecoration: 'none' }}>
              <Text color={'gray'}>FAQ</Text>
            </a>
            <a href="/" target="" style={{ textDecoration: 'none' }}>
              <Text color={'gray'}>Contact</Text>
            </a>
          </Stack>
          <Stack direction="column">
            <Text>Legal</Text>
            <a href="#" target="_blank" style={{ textDecoration: 'none' }}>
              <Text color={'gray'}>Privacy Policy</Text>
            </a>
            <a href="#" target="_blank" style={{ textDecoration: 'none' }}>
              <Text color={'gray'}>Terms of Service</Text>
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/59223979/cookie-policy"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Text color={'gray'}>Cookies Policy</Text>
            </a>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
