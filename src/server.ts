import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CourseResolver } from "./resolvers/course-resolver";

async function booststrap() {
    const schema = await buildSchema({
        resolvers: [
            CourseResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })
    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen();

    console.log(`🚀 Server ready at ${url}`);
}

booststrap();