const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    display: (parent, args, context, { id }) => {
      return context.prisma.agencies({ id })
    },
    // drafts: (parent, args, context) => {
    //   return context.prisma.posts({ where: { published: false } })
    // },
    // post: (parent, { id }, context) => {
    //   return context.prisma.post({ id })
    // },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
