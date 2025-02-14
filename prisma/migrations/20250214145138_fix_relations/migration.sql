/*
  Warnings:

  - You are about to drop the column `courseId` on the `Discipline` table. All the data in the column will be lost.
  - Changed the type of `period` on the `Discipline` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Discipline" DROP CONSTRAINT "Discipline_courseId_fkey";

-- AlterTable
ALTER TABLE "Discipline" DROP COLUMN "courseId",
DROP COLUMN "period",
ADD COLUMN     "period" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_CourseDisciplines" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CourseDisciplines_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Prerequisites" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Prerequisites_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CourseDisciplines_B_index" ON "_CourseDisciplines"("B");

-- CreateIndex
CREATE INDEX "_Prerequisites_B_index" ON "_Prerequisites"("B");

-- AddForeignKey
ALTER TABLE "_CourseDisciplines" ADD CONSTRAINT "_CourseDisciplines_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseDisciplines" ADD CONSTRAINT "_CourseDisciplines_B_fkey" FOREIGN KEY ("B") REFERENCES "Discipline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Prerequisites" ADD CONSTRAINT "_Prerequisites_A_fkey" FOREIGN KEY ("A") REFERENCES "Discipline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Prerequisites" ADD CONSTRAINT "_Prerequisites_B_fkey" FOREIGN KEY ("B") REFERENCES "Discipline"("id") ON DELETE CASCADE ON UPDATE CASCADE;
