import { Heading, VStack, Button } from '@chakra-ui/react';
import { contractAddress } from 'utils/contract';
import { useContractWrite } from 'wagmi';

const Home = () => {
  const { isLoading, write } = useContractWrite({
    address: contractAddress,
    abi: [
      {
        name: 'mint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
      },
    ],
    functionName: 'mint',
    mode: 'recklesslyUnprepared'
  })
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        NFT Minting
      </Heading>
      <Button colorScheme="blue" onClick={() => write?.()}>
        {isLoading ? 'Minting...':'Mint'}
      </Button>
    </VStack>
  );
};

export default Home;
