const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./protos/subastas.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  array: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const SubastaService = grpc.loadPackageDefinition(packageDefinition).SubastaService;
const ClienteService = grpc.loadPackageDefinition(packageDefinition).ClienteService;

const clientSubasta = new SubastaService(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

const clientCliente = new ClienteService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

// add a Producto
clientCliente.getCliente({
  id: "1"
}, (error, cliente) => {
  if (error) throw error;
  console.log("Method get cliente.", cliente);
});
/* client.create({},
  (error, product) => {
    if (error) throw error;
    console.log("Successfully created a product.", product);
  }
); */