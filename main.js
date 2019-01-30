const Blockchain = require('./blockchain');
const Block = require('./block');

// Create blockchain
let blockChain = new Blockchain();

// Add blocks as test
blockChain.addBlock(new Block(blockChain.getLatestBlock().index + 1, new Date(), { ammount: '10', buyer: 'mask2jda34h9i', seller : 'mndk2jlal4hui' }));
blockChain.addBlock(new Block(blockChain.getLatestBlock().index + 1, new Date(), { ammount: '10', buyer: 'mask2jda34h9i', seller : 'mndk2jlal4hui' }));

// Test output
console.log('Blockchain structure:\n', JSON.stringify(blockChain, null, 4));