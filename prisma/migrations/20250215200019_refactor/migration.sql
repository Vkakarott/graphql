/*
  Warnings:

  - You are about to drop the `DisciplineRelation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CourseDisciplines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Prerequisites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DisciplineRelation" DROP CONSTRAINT "DisciplineRelation_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "DisciplineRelation" DROP CONSTRAINT "DisciplineRelation_prerequisiteId_fkey";

-- DropForeignKey
ALTER TABLE "_CourseDisciplines" DROP CONSTRAINT "_CourseDisciplines_A_fkey";

-- DropForeignKey
ALTER TABLE "_CourseDisciplines" DROP CONSTRAINT "_CourseDisciplines_B_fkey";

-- DropForeignKey
ALTER TABLE "_Prerequisites" DROP CONSTRAINT "_Prerequisites_A_fkey";

-- DropForeignKey
ALTER TABLE "_Prerequisites" DROP CONSTRAINT "_Prerequisites_B_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "disciplines" TEXT[];

-- AlterTable
ALTER TABLE "Discipline" ADD COLUMN     "prerequisites" TEXT[];

-- DropTable
DROP TABLE "DisciplineRelation";

-- DropTable
DROP TABLE "_CourseDisciplines";

-- DropTable
DROP TABLE "_Prerequisites";
