import * as Web3 from '@solana/web3.js'

// Good practice for assigning public keys to be able to use some methods 
const publicKey = new Web3.PublicKey('CHKvfC1bTf52Fgsj5PsQyh3akhEQYkjipsTbLfexGSku');
const CLUSTER_TYPE = 'testnet' // Other cluster such as Mainnet Beta, Devnet or Custom RPC URL

async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl(CLUSTER_TYPE))
    
    const balance = await connection.getBalance(publicKey)  
    console.log(CLUSTER_TYPE + ' Balance:', balance, '\n')

    const accountInfo = await connection.getAccountInfo(publicKey)  
    console.log(CLUSTER_TYPE + ' Account Information\n', accountInfo)
}

main()