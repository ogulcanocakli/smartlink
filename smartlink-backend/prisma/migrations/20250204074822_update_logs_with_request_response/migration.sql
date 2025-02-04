/*
  Warnings:

  - Added the required column `request` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `response` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "request" JSONB NOT NULL,
ADD COLUMN     "response" JSONB NOT NULL;
