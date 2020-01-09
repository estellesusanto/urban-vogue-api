const fetch = require('node-fetch');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

const listingsUrl = `https://openapi.etsy.com/v2/shops/UrbanVogueShop/listings/active?api_key=${process.env.API_KEY}`;
const bucketName = 'etsy-monthly-snapshots';

const callExternalApi = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
};

/**
 * Calls the Etsy API to return all active listings from their database
 */
function handleGetActiveListings() {
    callExternalApi(listingsUrl)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        throw(error);
    })
};

/**
 * Pulls from Cloud Storage bucket
 */
async function handleGetSoldListings() {
    const [files] = await storage.bucket(bucketName).getFiles();

    files.forEach(file => {
        console.log("file name:" + file.name)
        // tempFile = file.download();
        // console.log(JSON.parse(tempFile));
    });
};

module.exports = { 
    getActiveListings: handleGetActiveListings(),
    getSoldListings: handleGetSoldListings()
};