import { Field, InputType } from "type-graphql";
import { Discipline } from "../models/discipline-model";

@InputType()
export class CreateCourseInput {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    duration: number;

    @Field(() => [Discipline])
    disciplines: Discipline[];
}