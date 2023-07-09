import { createMetaplexInstance } from "./metaplex";

const METAPLEX = createMetaplexInstance()

const metadata = {
    name: "dreyoji.sol NFT",
    description: "My first Solana NFT using Metaplex Token Standard",
    image: "",
    attributes: [
        {
            trait_type: 'Event',
            value: 'Solana Developers Bootcamp',
        }
    ]
}

async function main(){
    const { uri } = await METAPLEX.nfts().uploadMetadata(metadata)
    console.log('Metadata Uri:', uri);
}

main()