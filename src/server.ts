import "reflect-metadata";

import path from "node:path";
import { prisma } from "./lib/prisma";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CourseResolver } from "./resolvers/course-resolver";
import { DisciplineResolver } from "./resolvers/discipline-resolver";

async function booststrap() {
    const schema = await buildSchema({
        resolvers: [
            CourseResolver,
            DisciplineResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })
    const server = new ApolloServer({
        schema,
        context: () => ({ prisma }),
    })

    const { url } = await server.listen();

    console.log(`🚀 Server ready at ${url}`);
}

booststrap();