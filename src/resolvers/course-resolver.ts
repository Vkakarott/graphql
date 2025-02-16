import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { randomUUID } from "node:crypto";
import { Course } from "../dtos/models/course-model";
import { CreateCourseInput } from "../dtos/inputs/create-course-input";
import { prisma } from "../lib/prisma";
import { UpdateCourseDisciplinesInput } from "../dtos/inputs/update-course-disciplines-input";

@Resolver(Course)
export class CourseResolver {
    @Query(() => [Course])
    async courses() {
        return await prisma.course.findMany();
    }

    @Mutation(() => Course)
    async createCourse(@Arg('data') data: CreateCourseInput): Promise<Course> {
        const course = await prisma.course.create({
            data: {
                id: randomUUID(),
                name: data.name,
                duration: data.duration,
                disciplines: data.disciplines
            }
        });

        return course;
    }

    @Mutation(() => Course)
    async updateCourseDiciplines(@Arg('data') data: UpdateCourseDisciplinesInput): Promise<Course> {
        const course = await prisma.course.update({
            where: {
                id: data.id
            },
            data: {
                disciplines: data.disciplines
            }
        });

        return course;
    }   
}