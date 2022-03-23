'use strict'

const {
  SubastaService,
  ClienteService,
  grpc
} = require('@subastas/protoloader')

const clientSubasta = new SubastaService('localhost:50051', grpc.credentials.createInsecure())
const clientClient = new ClienteService('localhost:50051', grpc.credentials.createInsecure())

module.exports = {
  clientSubasta,
  clientClient
}
