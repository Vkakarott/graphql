-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discipline" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,
    "nature" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "courseId" TEXT,

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineRelation" (
    "id" TEXT NOT NULL,
    "disciplineId" TEXT NOT NULL,
    "prerequisiteId" TEXT NOT NULL,

    CONSTRAINT "DisciplineRelation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Discipline" ADD CONSTRAINT "Discipline_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineRelation" ADD CONSTRAINT "DisciplineRelation_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineRelation" ADD CONSTRAINT "DisciplineRelation_prerequisiteId_fkey" FOREIGN KEY ("prerequisiteId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
