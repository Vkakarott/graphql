import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Discipline {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    workload: number;

    @Field()
    nature: string;

    @Field()
    period: number;

    @Field(() => [Discipline], { nullable: true })
    prerequisites: Discipline[];
}