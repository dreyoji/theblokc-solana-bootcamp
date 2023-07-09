import { createMetaplexInstance } from "./metaplex";

async function main() {
    
    const METAPLEX = createMetaplexInstance();
    const metadataUri = ''
    const { nft } = await METAPLEX.nfts().create({
        uri: metadataUri,
        name: 'My NFT - Solana Developers Bootcamp',
        sellerFeeBasisPoints: 0
    })
    console.log('NFT:',nft)
    
}

main()