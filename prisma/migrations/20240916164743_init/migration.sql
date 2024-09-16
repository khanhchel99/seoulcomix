/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[restaurantId]` on the table `Featured` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "images" TEXT[];

-- DropTable
DROP TABLE "Image";

-- CreateIndex
CREATE UNIQUE INDEX "Featured_restaurantId_key" ON "Featured"("restaurantId");
