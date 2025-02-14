import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { randomUUID } from "node:crypto";
import { Course } from "../dtos/models/course-model";
import { CreateCourseInput } from "../dtos/inputs/create-course-input";

@Resolver(Course)
export class CourseResolver {
    private courseList: Course[] = [];

    @Query(() => [Course])
    async courses(): Promise<Course[]> {
        return this.courseList;
    }

    @Mutation(() => Course)
    async createCourse(@Arg('data') data: CreateCourseInput): Promise<Course> {
        const course = {
            id: randomUUID(),
            name: data.name,
            duration: data.duration,
            disciplines: []
        };

        this.courseList.push(course);

        return course;
    }
}