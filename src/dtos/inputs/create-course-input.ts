import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCourseInput {
    @Field()
    name: string;

    @Field()
    duration: number;

    @Field(() => [String], { nullable: true })
    disciplines?: string[];
}
