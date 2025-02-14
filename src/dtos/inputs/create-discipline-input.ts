import { Field, InputType } from "type-graphql";
import { Discipline } from "../models/discipline-model";

@InputType()
export class CreateDisciplineInput {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    prerequisites: Discipline[];

    @Field()
    workload: number;

    @Field()
    nature: string;

    @Field()
    period: string;
}