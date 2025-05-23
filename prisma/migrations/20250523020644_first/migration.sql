-- CreateEnum
CREATE TYPE "Aptitude" AS ENUM ('APTE', 'INAPTE');

-- CreateEnum
CREATE TYPE "EpOptionnel" AS ENUM ('ESPAGNOL', 'ALLEMAND', 'ITALIEN', 'ARABE', 'PORTUGAIS', 'RUSSE', 'TECHNOLOGIE', 'ECONOMIE_FAMILIALE');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MASCULIN', 'FEMININ');

-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('PU', 'PR', 'CL');

-- CreateEnum
CREATE TYPE "TypeEtablissement" AS ENUM ('COLLEGE', 'LYCEE', 'MIXTE_LYCEE_COLLEGE', 'COLLEGE_PRIVE', 'COLLEGE_PRIVE_MIXTE', 'LYCEE_PRIVE_MIXTE');

-- CreateEnum
CREATE TYPE "PresenceType" AS ENUM ('PRESENT', 'ABSENT');

-- CreateTable
CREATE TABLE "etablissements" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "TypeEtablissement" NOT NULL DEFAULT 'COLLEGE',
    "jury" INTEGER,
    "effectif" INTEGER,
    "adresse" TEXT NOT NULL,

    CONSTRAINT "etablissements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidats" (
    "id" SERIAL NOT NULL,
    "code" TEXT,
    "num" INTEGER,
    "prenom" TEXT,
    "nom" TEXT,
    "sexe" TEXT,
    "datnais" TEXT,
    "lieunais" TEXT,
    "aptitude" TEXT,
    "option" TEXT,
    "section" TEXT,
    "jury" INTEGER,
    "first_ep_part" TEXT,
    "ep_part" TEXT,
    "centre" TEXT,
    "etablissementId" INTEGER NOT NULL,
    "presence" "PresenceType" NOT NULL DEFAULT 'PRESENT',

    CONSTRAINT "candidats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matieres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "coefficient" INTEGER NOT NULL DEFAULT 1,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "matieres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "matiereId" INTEGER NOT NULL,
    "candidatId" INTEGER NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "centres" (
    "id" SERIAL NOT NULL,
    "centre" TEXT,
    "nb_candidats" INTEGER,

    CONSTRAINT "centres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "suggessions" TEXT,
    "phone" TEXT,
    "adresse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "ien" TEXT NOT NULL,
    "etablissementId" INTEGER NOT NULL,
    "numero" INTEGER NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "dateNaissance" TIMESTAMP(3) NOT NULL,
    "lieuNaissance" TEXT,
    "photo" TEXT,
    "statut" "Statut" NOT NULL DEFAULT 'PU',
    "epOptionnel" "EpOptionnel" NOT NULL DEFAULT 'ESPAGNOL',
    "aptitude" "Aptitude" NOT NULL DEFAULT 'INAPTE',
    "sexe" "Gender" NOT NULL DEFAULT 'MASCULIN',
    "total" DOUBLE PRECISION,
    "moyenne" DOUBLE PRECISION,
    "rang" INTEGER,
    "resultat" TEXT,
    "red" DOUBLE PRECISION,
    "dic" DOUBLE PRECISION,
    "tsq" DOUBLE PRECISION,
    "svt" DOUBLE PRECISION,
    "lv1" DOUBLE PRECISION,
    "mat" DOUBLE PRECISION,
    "hg" DOUBLE PRECISION,
    "ec" DOUBLE PRECISION,
    "sp" DOUBLE PRECISION,
    "part" DOUBLE PRECISION,
    "orale" DOUBLE PRECISION,
    "eps" DOUBLE PRECISION,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "etablissements_nom_key" ON "etablissements"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "etablissements_slug_key" ON "etablissements"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_slug_key" ON "disciplines"("slug");

-- CreateIndex
CREATE INDEX "disciplines_slug_idx" ON "disciplines"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "matieres_slug_key" ON "matieres"("slug");

-- CreateIndex
CREATE INDEX "matieres_slug_idx" ON "matieres"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "contact_email_key" ON "contacts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contact_phone_key" ON "contacts"("phone");

-- AddForeignKey
ALTER TABLE "candidats" ADD CONSTRAINT "candidats_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES "etablissements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matieres" ADD CONSTRAINT "matieres_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_candidatId_fkey" FOREIGN KEY ("candidatId") REFERENCES "candidats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_matiereId_fkey" FOREIGN KEY ("matiereId") REFERENCES "matieres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES "etablissements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
