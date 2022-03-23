'use strict'

const path = require('path')
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const PROTO_PATH = path.join(__dirname, 'schema', 'subastas.proto')

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  array: true
}

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)

const SubastaService = grpc.loadPackageDefinition(packageDefinition).SubastaService
const ClienteService = grpc.loadPackageDefinition(packageDefinition).ClienteService

module.exports = {
  SubastaService,
  ClienteService,
  grpc
}
