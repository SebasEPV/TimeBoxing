-- AlterTable
ALTER TABLE `activity` MODIFY `dueDate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `dueDate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `startTime` VARCHAR(191) NOT NULL,
    MODIFY `endTime` VARCHAR(191) NOT NULL;
