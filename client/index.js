const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

let input = process.argv[2];
if (process.argv[3]) {
  input = `${process.argv[2]} ${process.argv[3]}`;
}

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: input,
  });

  console.log({ gift });
}

main();