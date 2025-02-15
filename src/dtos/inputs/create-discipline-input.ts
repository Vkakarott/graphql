import { Field, InputType } from "type-graphql";

@InputType()
export class CreateDisciplineInput {
    @Field()
    name: string;

    @Field(() => [String], { nullable: true })
    prerequisites: string[];

    @Field()
    workload: number;

    @Field()
    nature: string;

    @Field()
    period: number;
}