import { useColorMode } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Heading>BabyNFT</Heading>
  );
};

export default MoralisLogo;
