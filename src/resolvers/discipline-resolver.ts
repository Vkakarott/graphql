import { Mutation, Query, Resolver, Arg, FieldResolver, Root } from "type-graphql";
import { CreateDisciplineInput } from "../dtos/inputs/create-discipline-input";
import { Discipline } from "../dtos/models/discipline-model";

@Resolver(() => Discipline)
export class DisciplineResolver {
    @Query(() => [Discipline])
    async disciplines() {
        return [
        ];
    }

    @Mutation(() => Discipline)
    async createAppointment(@Arg('data') data: CreateDisciplineInput) {
        const discipline = {
            
        }

        return discipline;
    }
}