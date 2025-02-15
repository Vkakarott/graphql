import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Course {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    duration: number;

    @Field(() => [String], { nullable: true })
    disciplines?: string[]; 
}
