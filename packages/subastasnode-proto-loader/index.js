'use strict'

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const PROTO_PATH = './schema/hola.proto'

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options)

const HolaService = grpc.loadPackageDefinition(packageDefinition).HolaService

const client = new HolaService(
  'localhost:50051',
  grpc.ServerCredentials.createInsecure())

console.log(client)
