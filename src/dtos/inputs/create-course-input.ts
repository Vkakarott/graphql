import { Field, InputType } from "type-graphql";
import { CreateDisciplineInput } from "./create-discipline-input";

@InputType()
export class CreateCourseInput {
    @Field()
    name: string;

    @Field()
    duration: number;

    @Field(() => [CreateDisciplineInput], { nullable: true })
    disciplines?: CreateDisciplineInput[];
}
