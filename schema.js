const { buildSchema } = require("graphql");

const schema = buildSchema(`
 type Address {
    firstLine: String!
    secondLine: String!
    state: String!
    city: String!
    pincode: Int!
 }
 type User {
    id: ID!
    name: String!
    email: String!
    address: Address!
    isVerified: Boolean!
    createdAt: String!
 }
 input InputCreateAddress {
    firstLine: String!
    secondLine: String!
    state: String!
    city: String!
    pincode: Int!
 }
 input InputCreateUser {
    id: ID!
    name: String!
    email: String!
    address: InputCreateAddress!
    isVerified: Boolean!
    createdAt: String!
 }
 input InputUpdateAddress {
    firstLine: String!
    secondLine: String!
    state: String!
    city: String!
    pincode: Int!
 }
 input InputUpdateUser {
    id: ID!
    name: String!
    email: String!
    address: InputCreateAddress!
    isVerified: Boolean!
    createdAt: String!
 }
 type Query {
    specificUser(id: ID!): User!
    allUsers: [User]!
 }
 type Mutation {
    createUser(input: InputCreateUser!): User!
    updateUser(input: InputUpdateUser!): User!
    removeUser(id: ID!): User!
 }
`);

module.exports = schema;
