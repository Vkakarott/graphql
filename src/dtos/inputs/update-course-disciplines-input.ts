import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateCourseDisciplinesInput {
    @Field()
    id: string;

    @Field(() => [String])
    disciplines: string[];
}