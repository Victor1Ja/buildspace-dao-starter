import { ThirdwebSDK } from '@3rdweb/sdk';
import ethers from 'ethers';

import dotenv from 'dotenv';
dotenv.config();

if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY ==""){
    console.log("🛑 Private key not found.");
}
if (!process.env.STAGING_ALCHEMY_KEY || process.env.STAGING_ALCHEMY_KEY == "") {
    console.log("🛑 Alchemy API URL not found.")
}
  
if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == "") {
    console.log("🛑 Wallet Address not found.")
}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,//Private Key
        ethers.getDefaultProvider(process.env.STAGING_ALCHEMY_KEY)//RPC URL, by defect it is used Alchemy
    ),
);

(async () => {
    try{
        const apps = await sdk.getApps();
        console.log("👋Your adrress  is:", apps[0].address);
    }catch(err){
        console.error("Failed to get apps from the sdk");
        process.exit(1);
    }
})()

export default sdk;

