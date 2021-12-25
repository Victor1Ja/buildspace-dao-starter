import sdk  from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule("0x801b09f836f356633bCaa3D08f0CBF404b8ab2f6");

(async () =>{
    try{
        await bundleDrop.createBatch([
            {
                name:"Fun Hat",
                description: "This NFT will give access to JustForFunDAO!",
                image: readFileSync("scripts/assets/member.png"),

            }
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    }catch (error) {
        console.error("failed to create the new NFT", error);
    };
})();