import * as Web3 from '@solana/web3.js'
import 'dotenv/config'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js'
import base58 from 'bs58'

//console.log(process.env.SOL_PRIVATE_KEY)

async function main(){
    const transaction = new Web3.Transaction();

    const sendSolInstruction = SystemProgram.transfer(
        {
        fromPubkey: new Web3.PublicKey('CHKvfC1bTf52Fgsj5PsQyh3akhEQYkjipsTbLfexGSku'), // Public key of test 1
        toPubkey: new Web3.PublicKey('5AJc7jsDhbPMjyXCrtJQqosLcyW9F5urJwmXujmwYxFM'),   // Public key of test 2
        lamports: 1 * LAMPORTS_PER_SOL                                                  // Lamports <> SOL Converter
        }
    )
    transaction.add(sendSolInstruction)

    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK)

    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet'))

    const txHash = await sendAndConfirmTransaction(connection, transaction, [keyPairFromSecret]);
    console.log('txtHash:', txHash)

}

main()