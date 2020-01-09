require('dotenv').config();
const getItems = require('./modules/getItems');
const express = require('express');
const app = express();


const port = process.env.PORT || 5000;

/* any incoming request will be parsed as json */
app.use(express.json());

/* docs - status types: active, sold */
app.get(`/listings/:status`, (req, res) => {
    console.log(getItems.getActiveListings)
    data = req.params.status == 'active' ? getItems.getActiveListings : getItems.getSoldListings;
    res.send(data);
})

/* Handles both HTTP and HTTPS 
*  Documentation: https://expressjs.com/en/api.html#app.listen
*/
app.listen(port, () => console.log(`listening on port ${port}...`));