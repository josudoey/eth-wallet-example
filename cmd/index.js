const env = process.env
exports = module.exports = (prog) => {
  prog
    .option('--rpcapi <config-path>', 'rpcapi default: "http://localhost:8545"', env.RPCAPI || 'http://localhost:8545')
  process.on('unhandledRejection', function (err) {
    console.error(err)
  })
}
