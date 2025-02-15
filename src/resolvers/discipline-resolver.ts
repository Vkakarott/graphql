import { Mutation, Query, Resolver, Arg } from "type-graphql";
import { CreateDisciplineInput } from "../dtos/inputs/create-discipline-input";
import { Discipline } from "../dtos/models/discipline-model";
import { randomUUID } from "node:crypto";
import { prisma } from "../lib/prisma";

@Resolver(() => Discipline)
export class DisciplineResolver {
    @Query(() => [Discipline])
    async disciplines() {
        return await prisma.discipline.findMany();
    }

    @Mutation(() => Discipline)
    async createDiscipline(@Arg('data') data: CreateDisciplineInput): Promise<Discipline> {
        const discipline = await prisma.discipline.create({
            data: {
                id: randomUUID(),
                name: data.name,
                workload: data.workload,
                nature: data.nature,
                period: data.period,
                prerequisites: data.prerequisites
            }
        })

        return discipline;
    }
}