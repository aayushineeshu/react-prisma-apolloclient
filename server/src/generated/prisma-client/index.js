"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "display",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://sherpafeet-2e3235c448.herokuapp.com/sherpa-prisma/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "display",
    embedded: false
  }
];
