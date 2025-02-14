import { ObjectType, Field } from "type-graphql";
import { Discipline } from "./discipline-model";

@ObjectType()
export class Course {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    duration: number;

    @Field(() => [Discipline])
    disciplines: Discipline[];
}