import { gql } from 'apollo-server';
import User from './User';
import Group from './Group';
import Location from './Location';
import Travel from './Travel';
import Features from '../features';

const Query = `type Query {
  user(id: String, name: String): User
  location(id: String, address: String): Location
  travel(id: String, members:[String!], driver: String, locations: [String!]): Travel
  group(id: String, members: [String!], isPrivate: Boolean, travels: [String!]): Group
  users(id: String, name: String): [User]
  locations: [Location]
  travels: [Travel]
  groups: [Group]
}`;

const Mutation = `type Mutation {
  ${User.Mutation}
  ${Group.Mutation}
  ${Location.Mutation}
  ${Travel.Mutation}
  ${Features.mutations.map(mutation => mutation.Mutation).join('\n')}
}`;

const Type = `
  ${User.Type}
  ${Group.Type}
  ${Location.Type}
  ${Travel.Type}
  ${Features.mutations.map(mutation => mutation.Type).join('\n')}
`;

export default gql`
  ${Type}
  ${Mutation}
  ${Query}
`;
