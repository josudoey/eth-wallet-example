module.exports = function (prog) {
  prog
    .command('generate-address')
    .option('--pri <key>', 'private key')
    .description('show address balance')
    .action(async function (opts) {
      const util = require('ethereumjs-util')
      const crypto = require('crypto')
      const randomBytes = crypto.randomBytes(32)
      const privateKey = '0x' + randomBytes.toString('hex')
      const address = '0x' + util.privateToAddress(randomBytes).toString('hex')
      const checkSumAddress = util.toChecksumAddress(address)
      console.log(`address: ${checkSumAddress}
key: ${privateKey}
`)
    })

  prog
    .command('show-address')
    .option('--pri <key>', 'private key', '0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
    .description('show address balance')
    .action(async function (opts) {
      const util = require('ethereumjs-util')
      const address = '0x' + util.privateToAddress(opts.pri).toString('hex')
      const checkSumAddress = util.toChecksumAddress(address)
      console.log(`address: ${checkSumAddress}`)
    })
}
