import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD4a148c9aE788B30057A353440D120a55E4Efd4E",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sky",
        description: "Look sky,relax your life,enjoy the DAO!",
        image: readFileSync("scripts/assets/sky.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()