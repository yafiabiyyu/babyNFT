import { Box, Grid, Heading } from '@chakra-ui/react';
import { useEvmWalletNFTs, useEvmWalletNFTCollections } from '@moralisweb3/next';
import { NFTCard } from 'components/modules';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useNetwork } from 'wagmi';

const NFTBalances = () => {
  const { data } = useSession();
  const { chain } = useNetwork();

  const { data: nftss } = useEvmWalletNFTCollections({
    address: data?.user?.address,
    chain: chain?.id,
  })
  const { data: nfts } = useEvmWalletNFTs({
    address: data?.user?.address,
    chain: chain?.id,
    tokenAddresses: ['0xc52A29194C583b05A6602E1f5f3675AF50095Fa9']
  });

  useEffect(() => console.log('nfts: ', nfts), [nfts]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        NFT Balances
      </Heading>
      {nfts?.length ? (
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
          {nfts.map((nft, key) => (
            <NFTCard nft={nft} key={key} />
          ))}
        </Grid>
      ) : (
        <Box>Looks Like you do not have any NFTs</Box>
      )}
    </>
  );
};

export default NFTBalances;
