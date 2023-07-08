import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import base58 from 'bs58'
import * as token from '@solana/spl-token' // npm install @solana/spl-token

async function main() {
    
    const CLUSTER_TYPE = 'testnet' // Other cluster such as Mainnet Beta, Devnet or Custom RPC URL

    const connection = new Web3.Connection(Web3.clusterApiUrl(CLUSTER_TYPE))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)

    const tokenMint = await token.createMint(
         connection,
         signer,
         new Web3.PublicKey('CHKvfC1bTf52Fgsj5PsQyh3akhEQYkjipsTbLfexGSku'),
         new Web3.PublicKey('CHKvfC1bTf52Fgsj5PsQyh3akhEQYkjipsTbLfexGSku'),
         9
    );

    console.log('tokenMint:', tokenMint.toBase58());
    
}

main()