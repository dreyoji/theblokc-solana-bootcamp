import 'dotenv/config';
import * as Web3 from '@solana/web3.js';
import { sendAndConfirmTransaction } from '@solana/web3.js';
import base58 from 'bs58';

async function main() {

    const CLUSTER_TYPE = 'testnet';
    const connection = new Web3.Connection(Web3.clusterApiUrl(CLUSTER_TYPE));
    const privateKey = base58.decode(process.env.SOL_PRIVATE_KEY || ''); 

    const signer = Web3.Keypair.fromSecretKey(privateKey);
    const transaction = new Web3.Transaction();
    const publicKey = new Web3.PublicKey('5Eh25gUPJDoNtTd3v6vpZ5VAwmjUUrxN28MpJDCfR2xA');
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey("4HeQHtbPWwgAXkUD3EGtTdaJA7Px2yFoVJFr3a6Qf8zE")
    });

    transaction.add(instruction); 

    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    );

    console.log('SIGNATURE', signature);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
