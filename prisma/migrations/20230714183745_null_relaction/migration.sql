/*
  Warnings:

  - You are about to drop the column `selectionId` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `trainerId` on the `selections` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `players` DROP FOREIGN KEY `Players_selectionId_fkey`;

-- DropForeignKey
ALTER TABLE `selections` DROP FOREIGN KEY `Selections_trainerId_fkey`;

-- AlterTable
ALTER TABLE `players` DROP COLUMN `selectionId`;

-- AlterTable
ALTER TABLE `selections` DROP COLUMN `trainerId`;
