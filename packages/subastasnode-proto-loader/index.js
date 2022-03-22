'use strict'

const path = require('path')
const protoLoader = require('@grpc/proto-loader')
const grpc = require('@grpc/grpc-js')

const RPC_PATH = path.join(__dirname, "schema")
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  arrays: true,
}

const protoProducto = protoLoader.loadSync(
  path.join(__dirname, 'schema', 'producto.proto'),
  options
)
const protoCliente = protoLoader.loadSync(
  path.join(__dirname, 'schema', 'clientes.proto'),
  options
)
const protoSubasta = protoLoader.loadSync(
  path.join(__dirname, 'schema', 'subastas.proto'),
  options
)

const ProductoService = grpc.loadPackageDefinition(protoProducto)
const ClienteService = grpc.loadPackageDefinition(protoCliente)
const SubastaService = grpc.loadPackageDefinition(protoSubasta)


module.exports = {
  ProductoService,
  ClienteService,
  SubastaService
}
