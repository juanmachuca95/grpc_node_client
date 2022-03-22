const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./protos/product.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const ProductService = grpc.loadPackageDefinition(packageDefinition).ProductService;

const client = new ProductService(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

// add a news
client.create(
    {
      id: "1",
      name: "Body content 3",
    },
    (error, product) => {
      if (error) throw error;
      console.log("Successfully created a product.", product);
    }
  );